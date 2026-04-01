import requests
import base64
import yaml
import sys
import json
from urllib.parse import unquote, parse_qs, urlparse

# 修复打包后 stdout 为 None 的问题
if sys.stdout is not None:
    sys.stdout.reconfigure(encoding='utf-8')

# 订阅链接
SUBSCRIPTION_URL = ""

# 模板配置文件路径
TEMPLATE_FILE = ""
OUTPUT_FILE = ""

def parse_ssr_url(url):
    """解析 SSR 协议节点"""
    try:
        # ssr://base64
        if not url.startswith('ssr://'):
            return None

        decoded = base64.b64decode(url[6:]).decode('utf-8')
        # server:port:protocol:method:obfs:password_base64/?params
        parts = decoded.split('/?')
        main = parts[0]
        params = parse_qs(parts[1]) if len(parts) > 1 else {}

        server, port, protocol, method, obfs, password_b64 = main.split(':')
        password = base64.b64decode(password_b64).decode('utf-8')

        name = base64.b64decode(params.get('remarks', [''])[0]).decode('utf-8') if 'remarks' in params else "SSR Node"

        return {
            'name': name,
            'type': 'ssr',
            'server': server,
            'port': int(port),
            'cipher': method,
            'password': password,
            'protocol': protocol,
            'obfs': obfs
        }
    except:
        return None

def parse_vmess_url(url):
    """解析 VMess 协议节点"""
    try:
        # vmess://base64
        if not url.startswith('vmess://'):
            return None

        decoded = base64.b64decode(url[8:]).decode('utf-8')
        config = json.loads(decoded)

        node = {
            'name': config.get('ps', 'VMess Node'),
            'type': 'vmess',
            'server': config.get('add'),
            'port': int(config.get('port')),
            'uuid': config.get('id'),
            'alterId': int(config.get('aid', 0)),
            'cipher': config.get('scy', 'auto'),
            'udp': True,
            'network': config.get('net', 'tcp')
        }

        # TLS 配置
        if config.get('tls') == 'tls':
            node['tls'] = True
            node['servername'] = config.get('sni', config.get('host', ''))
            node['skip-cert-verify'] = True

        # ws 配置
        if node['network'] == 'ws':
            node['ws-opts'] = {
                'path': config.get('path', '/')
            }
            if config.get('host'):
                node['ws-opts']['headers'] = {'Host': config['host']}

        return node
    except:
        return None

def parse_vless_url(url):
    """解析 VLESS 协议节点"""
    try:
        # vless://uuid@server:port?params#name
        if not url.startswith('vless://'):
            return None

        url = url[8:]
        if '#' in url:
            url, name = url.split('#', 1)
            name = unquote(name)
        else:
            name = "VLESS Node"

        if '?' in url:
            url, params_str = url.split('?', 1)
            params = parse_qs(params_str)
        else:
            params = {}

        uuid, server_port = url.split('@', 1)
        server, port = server_port.rsplit(':', 1)

        node = {
            'name': name,
            'type': 'vless',
            'server': server,
            'port': int(port),
            'uuid': uuid,
            'network': params.get('type', ['tcp'])[0],
            'udp': True
        }

        # encryption 参数（后量子加密）
        encryption = params.get('encryption', ['none'])[0]
        if encryption != 'none':
            node['packet-encoding'] = 'xudp'

        # flow 参数
        if 'flow' in params:
            node['flow'] = params['flow'][0]

        # security 处理
        security = params.get('security', [''])[0]
        if security == 'reality':
            node['tls'] = True
            node['servername'] = params.get('sni', [''])[0]
            node['reality-opts'] = {
                'public-key': params.get('pbk', [''])[0],
                'short-id': params.get('sid', [''])[0]
            }
            if 'fp' in params:
                node['client-fingerprint'] = params['fp'][0]
        elif security == 'tls':
            node['tls'] = True
            if 'sni' in params:
                node['servername'] = params['sni'][0]
            if 'fp' in params:
                node['client-fingerprint'] = params['fp'][0]

        # 传输层配置
        network = node['network']
        if network == 'xhttp':
            node['xhttp-opts'] = {
                'path': params.get('path', ['/'])[0]
            }
            if 'mode' in params:
                node['xhttp-opts']['mode'] = params['mode'][0]
            if 'host' in params:
                node['xhttp-opts']['host'] = [params['host'][0]]
        elif network == 'ws':
            node['ws-opts'] = {
                'path': params.get('path', ['/'])[0]
            }
            if 'host' in params:
                node['ws-opts']['headers'] = {'Host': params['host'][0]}

        node['skip-cert-verify'] = params.get('insecure', ['0'])[0] == '1' or params.get('allowInsecure', ['0'])[0] == '1'

        return node
    except:
        return None

def parse_anytls_url(url):
    """解析 anytls:// 协议节点"""
    try:
        # anytls://password@server:port?params#name
        if not url.startswith('anytls://'):
            return None

        url = url[9:]  # 去掉 anytls://

        # 分离备注
        if '#' in url:
            url, name = url.split('#', 1)
            name = unquote(name)
        else:
            name = "AnyTLS Node"

        # 分离参数
        if '?' in url:
            url, params_str = url.split('?', 1)
            params = parse_qs(params_str)
        else:
            params = {}

        # 分离 password 和 server:port
        if '@' in url:
            password, server_port = url.split('@', 1)
        else:
            return None

        # 分离服务器和端口
        if ':' in server_port:
            server, port = server_port.rsplit(':', 1)
            port = int(port)
        else:
            return None

        node = {
            'name': name,
            'type': 'anytls',
            'server': server,
            'port': port,
            'password': password,
            'udp': True,
            'tfo': True
        }

        # security 处理
        security = params.get('security', [''])[0]
        if security == 'reality':
            node['sni'] = params.get('sni', [''])[0]
            node['reality-opts'] = {
                'public-key': params.get('pbk', [''])[0],
                'short-id': params.get('sid', [''])[0]
            }
            if 'fp' in params:
                node['client-fingerprint'] = params['fp'][0]
        elif security == 'tls':
            if 'sni' in params:
                node['sni'] = params['sni'][0]
            if 'fp' in params:
                node['client-fingerprint'] = params['fp'][0]

        node['skip-cert-verify'] = params.get('insecure', ['0'])[0] == '1' or params.get('allowInsecure', ['0'])[0] == '1'

        return node
    except Exception as e:
        return None

def parse_tuic_url(url):
    """解析 tuic:// 协议节点"""
    try:
        # tuic://uuid:password@server:port?params#name
        if not url.startswith('tuic://'):
            return None

        url = unquote(url[7:])  # 去掉 tuic:// 并 URL 解码

        # 分离备注
        if '#' in url:
            url, name = url.split('#', 1)
            name = unquote(name)
        else:
            name = "TUIC Node"

        # 分离参数
        if '?' in url:
            url, params_str = url.split('?', 1)
            params = parse_qs(params_str)
        else:
            params = {}

        # 分离 uuid:password 和 server:port
        if '@' in url:
            uuid_password, server_port = url.split('@', 1)
            uuid, password = uuid_password.split(':', 1)
        else:
            return None

        # 分离服务器和端口
        if ':' in server_port:
            server, port = server_port.rsplit(':', 1)
            port = int(port)
        else:
            return None

        node = {
            'name': name,
            'type': 'tuic',
            'server': server,
            'port': port,
            'uuid': uuid,
            'password': password,
            'congestion-control': params.get('congestion_control', ['bbr'])[0],
            'udp-relay-mode': 'native',
            'skip-cert-verify': params.get('insecure', ['0'])[0] == '1' or params.get('allowInsecure', ['0'])[0] == '1'
        }

        if 'sni' in params:
            node['sni'] = params['sni'][0]

        if 'alpn' in params:
            alpn_value = params['alpn'][0]
            node['alpn'] = alpn_value.split(',') if ',' in alpn_value else [alpn_value]
        else:
            node['alpn'] = ['h3']

        return node
    except Exception as e:
        return None

def parse_trojan_url(url):
    """解析 Trojan 协议节点"""
    try:
        # trojan://password@server:port?params#name
        if not url.startswith('trojan://'):
            return None

        url = url[9:]
        if '#' in url:
            url, name = url.split('#', 1)
            name = unquote(name)
        else:
            name = "Trojan Node"

        if '?' in url:
            url, params_str = url.split('?', 1)
            params = parse_qs(params_str)
        else:
            params = {}

        password, server_port = url.split('@', 1)
        server, port = server_port.rsplit(':', 1)

        return {
            'name': name,
            'type': 'trojan',
            'server': server,
            'port': int(port),
            'password': password,
            'skip-cert-verify': True,
            'sni': params.get('sni', [''])[0]
        }
    except:
        return None

def parse_hysteria_url(url):
    """解析 Hysteria 协议节点"""
    try:
        # hysteria://server:port?params#name 或 hysteria2://password@server:port?params#name
        if url.startswith('hysteria://'):
            url = url[11:]
            version = 1
        elif url.startswith('hysteria2://'):
            url = url[12:]
            version = 2
        else:
            return None

        if '#' in url:
            url, name = url.split('#', 1)
            name = unquote(name)
        else:
            name = f"Hysteria{version} Node"

        if '?' in url:
            url, params_str = url.split('?', 1)
            params = parse_qs(params_str)
        else:
            params = {}

        # hysteria2 支持 password@server:port 格式
        if '@' in url:
            password, server_port = url.split('@', 1)
        else:
            server_port = url
            password = params.get('password', [''])[0] or params.get('auth', [''])[0]

        server, port = server_port.rsplit(':', 1)

        node = {
            'name': name,
            'type': 'hysteria2' if version == 2 else 'hysteria',
            'server': server,
            'port': int(port),
            'password': password,
            'skip-cert-verify': params.get('insecure', ['0'])[0] == '1' or params.get('allowInsecure', ['0'])[0] == '1'
        }

        if 'sni' in params:
            node['sni'] = params['sni'][0]

        if 'alpn' in params:
            node['alpn'] = [params['alpn'][0]]

        if version == 2:
            if 'obfs' in params:
                node['obfs'] = params['obfs'][0]
            if 'obfs-password' in params:
                node['obfs-password'] = params['obfs-password'][0]

        return node
    except:
        return None

def parse_ss_url(url):
    """解析 ss:// 协议节点"""
    try:
        # ss://base64@server:port#name 或 ss://method:password@server:port#name
        if not url.startswith('ss://'):
            return None

        url = url[5:]  # 去掉 ss://

        # 分离备注
        if '#' in url:
            url, name = url.split('#', 1)
            name = unquote(name)
        else:
            name = "SS Node"

        # 分离参数
        if '?' in url:
            url, params_str = url.split('?', 1)
            params = parse_qs(params_str)
        else:
            params = {}

        # 分离服务器和端口
        if '@' in url:
            method_password, server_port = url.split('@', 1)
        else:
            return None

        # 解码 method:password
        try:
            decoded = base64.b64decode(method_password).decode('utf-8')
            method, password = decoded.split(':', 1)
        except:
            # SS 2022 格式：尝试 urlsafe base64
            try:
                decoded = base64.urlsafe_b64decode(method_password + '==').decode('utf-8')
                method, password = decoded.split(':', 1)
            except:
                return None

        # 分离服务器和端口
        if ':' in server_port:
            server, port = server_port.rsplit(':', 1)
            port = int(port)
        else:
            return None

        return {
            'name': name,
            'type': 'ss',
            'server': server,
            'port': port,
            'cipher': method,
            'password': password,
            'udp': True
        }
    except Exception as e:
        return None

def fetch_subscription():
    """获取订阅节点"""
    print("正在获取订阅...")
    try:
        response = requests.get(SUBSCRIPTION_URL, timeout=10)
        response.raise_for_status()

        # Base64 解码
        decoded = base64.b64decode(response.text).decode('utf-8')

        # 按行分割
        lines = [line.strip() for line in decoded.split('\n') if line.strip()]

        print(f"获取到 {len(lines)} 个节点")

        # 解析节点
        nodes = []
        for line in lines:
            node = None
            if line.startswith('ss://'):
                node = parse_ss_url(line)
            elif line.startswith('ssr://'):
                node = parse_ssr_url(line)
            elif line.startswith('vmess://'):
                node = parse_vmess_url(line)
            elif line.startswith('vless://'):
                node = parse_vless_url(line)
            elif line.startswith('trojan://'):
                node = parse_trojan_url(line)
            elif line.startswith('hysteria://') or line.startswith('hysteria2://'):
                node = parse_hysteria_url(line)
            elif line.startswith('tuic://'):
                node = parse_tuic_url(line)
            elif line.startswith('anytls://'):
                node = parse_anytls_url(line)

            if node:
                nodes.append(node)

        print(f"解析成功 {len(nodes)} 个有效节点")
        return nodes

    except Exception as e:
        print(f"获取订阅失败: {e}")
        return []

def load_template(template_file=None):
    """加载模板配置"""
    if template_file is None:
        template_file = TEMPLATE_FILE

    print(f"加载模板配置: {template_file}")
    try:
        with open(template_file, 'r', encoding='utf-8') as f:
            config = yaml.safe_load(f)
        print("模板加载成功")
        return config
    except Exception as e:
        print(f"加载模板失败: {e}")
        return None

def generate_config(nodes, template):
    """生成完整配置"""
    print("生成配置文件...")

    # 删除 proxy-providers
    if 'proxy-providers' in template:
        del template['proxy-providers']

    # 确保 proxies 字段存在
    if 'proxies' not in template:
        template['proxies'] = []

    # 替换节点
    # 过滤假节点
    valid_nodes = []
    for node in nodes:
        if node.get('server') == '1.1.1.1' or node.get('password') == 'fake_node_password' or '❗' in node.get('name', ''):
            continue
        valid_nodes.append(node)

    print(f"过滤后有效节点: {len(valid_nodes)}/{len(nodes)}")
    template['proxies'] = valid_nodes

    return template

def save_config(config, output_file=None):
    """保存配置文件"""
    if output_file is None:
        output_file = OUTPUT_FILE

    print(f"保存配置到: {output_file}")
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            yaml.dump(config, f, allow_unicode=True, sort_keys=False)
        print("配置保存成功")
        return True
    except Exception as e:
        print(f"保存失败: {e}")
        return False

def main():
    # 1. 获取订阅节点
    nodes = fetch_subscription()
    if not nodes:
        print("未获取到有效节点，退出")
        return

    # 2. 加载模板
    template = load_template()
    if not template:
        print("模板加载失败，退出")
        return

    # 3. 生成配置
    config = generate_config(nodes, template)

    # 4. 保存配置
    if save_config(config):
        print(f"\n完成！生成的配置文件: {OUTPUT_FILE}")
        print(f"节点总数: {len(nodes)}")

if __name__ == "__main__":
    main()
