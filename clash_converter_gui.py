import tkinter as tk
from tkinter import ttk, filedialog, scrolledtext, messagebox
import threading
from datetime import datetime
import os
import sys
import json

# 导入转换逻辑
from clash_converter import (
    fetch_subscription, load_template, generate_config, save_config,
    parse_ss_url, parse_ssr_url, parse_vmess_url, parse_vless_url,
    parse_trojan_url, parse_hysteria_url, parse_tuic_url, parse_anytls_url
)

class SubscriptionConverterGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Clash 订阅转换工具")
        self.root.geometry("700x650")

        # 配置文件路径（与 exe 同目录）
        if getattr(sys, 'frozen', False):
            # 打包后的 exe
            exe_dir = os.path.dirname(sys.executable)
        else:
            # 开发环境
            exe_dir = os.path.dirname(os.path.abspath(__file__))

        self.config_file = os.path.join(exe_dir, "config.json")

        # 创建界面
        self.create_widgets()

        # 加载上次的配置
        self.load_config()

    def create_widgets(self):
        # 主框架
        main_frame = ttk.Frame(self.root, padding="10")
        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))

        # 订阅链接
        ttk.Label(main_frame, text="订阅链接:").grid(row=0, column=0, sticky=tk.W, pady=5)
        self.url_entry = ttk.Entry(main_frame, width=60)
        self.url_entry.grid(row=0, column=1, columnspan=2, sticky=(tk.W, tk.E), pady=5)

        # 模板文件
        ttk.Label(main_frame, text="模板文件:").grid(row=1, column=0, sticky=tk.W, pady=5)
        self.template_entry = ttk.Entry(main_frame, width=50)
        self.template_entry.grid(row=1, column=1, sticky=(tk.W, tk.E), pady=5)

        ttk.Button(main_frame, text="浏览", command=self.browse_template).grid(row=1, column=2, padx=5, pady=5)

        # 输出文件
        ttk.Label(main_frame, text="输出文件:").grid(row=2, column=0, sticky=tk.W, pady=5)
        self.output_entry = ttk.Entry(main_frame, width=50)
        self.output_entry.grid(row=2, column=1, sticky=(tk.W, tk.E), pady=5)

        ttk.Button(main_frame, text="打开文件夹", command=self.open_output_folder).grid(row=2, column=2, padx=5, pady=5)
        self.update_output_filename()

        # 分隔线
        ttk.Separator(main_frame, orient='horizontal').grid(row=3, column=0, columnspan=3, sticky=(tk.W, tk.E), pady=10)

        # 手动添加节点
        ttk.Label(main_frame, text="手动添加节点:").grid(row=4, column=0, sticky=tk.W, pady=5)
        ttk.Label(main_frame, text="(每行一个节点URL，支持所有协议)", font=('', 8)).grid(row=4, column=1, sticky=tk.W, pady=5)

        self.manual_nodes_text = scrolledtext.ScrolledText(main_frame, width=80, height=8, wrap=tk.WORD)
        self.manual_nodes_text.grid(row=5, column=0, columnspan=3, sticky=(tk.W, tk.E), pady=5)

        # 转换按钮
        self.convert_btn = ttk.Button(main_frame, text="开始转换", command=self.start_conversion)
        self.convert_btn.grid(row=6, column=0, columnspan=3, pady=15)

        # 日志区域
        ttk.Label(main_frame, text="转换日志:").grid(row=7, column=0, sticky=tk.W, pady=5)
        self.log_text = scrolledtext.ScrolledText(main_frame, width=80, height=15, wrap=tk.WORD)
        self.log_text.grid(row=8, column=0, columnspan=3, sticky=(tk.W, tk.E, tk.N, tk.S), pady=5)

        # 配置网格权重
        self.root.columnconfigure(0, weight=1)
        self.root.rowconfigure(0, weight=1)
        main_frame.columnconfigure(1, weight=1)
        main_frame.rowconfigure(8, weight=1)

    def browse_template(self):
        """浏览选择模板文件"""
        filename = filedialog.askopenfilename(
            title="选择模板文件",
            filetypes=[("YAML 文件", "*.yaml *.yml"), ("所有文件", "*.*")]
        )
        if filename:
            self.template_entry.delete(0, tk.END)
            self.template_entry.insert(0, filename)
            self.update_output_filename()

    def update_output_filename(self):
        """根据模板文件名生成输出文件名"""
        template_path = self.template_entry.get()
        if template_path:
            # 获取文件名（不含扩展名）
            base_name = os.path.splitext(os.path.basename(template_path))[0]
            # 添加日期后缀（月-日）
            date_suffix = datetime.now().strftime("%m%d")
            output_name = f"{base_name}-{date_suffix}.yaml"
            self.output_entry.delete(0, tk.END)
            self.output_entry.insert(0, output_name)

    def log(self, message):
        """输出日志"""
        self.log_text.insert(tk.END, message + "\n")
        self.log_text.see(tk.END)
        self.root.update_idletasks()

    def start_conversion(self):
        """开始转换（在新线程中执行）"""
        self.convert_btn.config(state='disabled')
        self.log_text.delete(1.0, tk.END)

        thread = threading.Thread(target=self.convert)
        thread.daemon = True
        thread.start()

    def convert(self):
        """执行转换"""
        try:
            url = self.url_entry.get().strip()
            template_file = self.template_entry.get().strip()
            output_file = self.output_entry.get().strip()
            manual_nodes_text = self.manual_nodes_text.get(1.0, tk.END).strip()

            # 验证：订阅链接和手动节点不能同时为空
            if not url and not manual_nodes_text:
                messagebox.showerror("错误", "订阅链接和手动节点不能同时为空！\n请至少填写其中一项。")
                self.convert_btn.config(state='normal')
                return

            if not template_file:
                messagebox.showerror("错误", "请选择模板文件")
                self.convert_btn.config(state='normal')
                return

            all_nodes = []

            # 1. 获取订阅节点
            if url:
                self.log("正在获取订阅...")
                nodes = self.fetch_nodes(url)
                if nodes:
                    self.log(f"✓ 订阅解析成功 {len(nodes)} 个节点")
                    all_nodes.extend(nodes)
                else:
                    self.log("⚠ 订阅未获取到节点")
            else:
                self.log("跳过订阅获取（未填写订阅链接）")

            # 2. 解析手动节点
            if manual_nodes_text:
                self.log("正在解析手动节点...")
                manual_nodes = self.parse_manual_nodes(manual_nodes_text)
                if manual_nodes:
                    self.log(f"✓ 手动节点解析成功 {len(manual_nodes)} 个")
                    all_nodes.extend(manual_nodes)
                else:
                    self.log("⚠ 手动节点解析失败")
            else:
                self.log("跳过手动节点（未填写）")

            # 验证是否有有效节点
            if not all_nodes:
                self.log("❌ 未获取到任何有效节点")
                messagebox.showerror("错误", "未获取到任何有效节点")
                self.convert_btn.config(state='normal')
                return

            self.log(f"✓ 总节点数: {len(all_nodes)}")

            # 3. 加载模板
            self.log(f"正在加载模板: {template_file}")
            template = load_template(template_file)
            if not template:
                self.log("❌ 模板加载失败")
                messagebox.showerror("错误", "模板加载失败")
                self.convert_btn.config(state='normal')
                return

            self.log("✓ 模板加载成功")

            # 4. 生成配置
            self.log("正在生成配置...")
            config = generate_config(all_nodes, template)

            # 5. 保存配置
            self.log(f"正在保存到: {output_file}")
            if save_config(config, output_file):
                abs_path = os.path.abspath(output_file)
                self.log(f"✓ 转换完成！")
                self.log(f"✓ 输出文件: {abs_path}")
                self.log(f"✓ 节点总数: {len(all_nodes)}")

                # 保存当前配置供下次使用
                self.save_config()

                messagebox.showinfo("成功", f"转换完成！\n节点数: {len(all_nodes)}\n输出: {output_file}")
            else:
                self.log("❌ 保存失败")
                messagebox.showerror("错误", "保存配置文件失败")

        except Exception as e:
            self.log(f"❌ 错误: {str(e)}")
            messagebox.showerror("错误", f"转换失败: {str(e)}")

        finally:
            self.convert_btn.config(state='normal')

    def fetch_nodes(self, url):
        """获取并解析订阅节点"""
        import requests
        import base64
        from urllib.parse import unquote

        try:
            response = requests.get(url, timeout=10)
            response.raise_for_status()

            # Base64 解码
            decoded = base64.b64decode(response.text).decode('utf-8')
            lines = [line.strip() for line in decoded.split('\n') if line.strip()]

            self.log(f"获取到 {len(lines)} 个节点")

            # 解析节点
            nodes = []
            for line in lines:
                node = None
                try:
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
                    else:
                        self.log(f"⚠ 解析失败: {line[:60]}...")
                except Exception as e:
                    self.log(f"❌ 解析错误: {line[:60]}... - {e}")

            return nodes

        except Exception as e:
            self.log(f"获取订阅失败: {e}")
            return []

    def parse_manual_nodes(self, text):
        """解析手动输入的节点"""
        lines = [line.strip() for line in text.split('\n') if line.strip()]
        nodes = []

        for line in lines:
            node = None
            try:
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
            except Exception as e:
                self.log(f"解析节点失败: {line[:50]}... - {e}")

        return nodes

    def open_output_folder(self):
        """打开输出文件所在文件夹"""
        output_file = self.output_entry.get().strip()
        if not output_file:
            messagebox.showwarning("提示", "请先设置输出文件")
            return

        abs_path = os.path.abspath(output_file)
        folder = os.path.dirname(abs_path)

        if os.path.exists(folder):
            os.startfile(folder)
        else:
            messagebox.showwarning("提示", "文件夹不存在")


    def load_config(self):
        """加载上次的配置"""
        try:
            if os.path.exists(self.config_file):
                with open(self.config_file, 'r', encoding='utf-8') as f:
                    config = json.load(f)

                # 填充上次的值
                if config.get('subscription_url'):
                    self.url_entry.insert(0, config['subscription_url'])

                if config.get('template_file'):
                    self.template_entry.insert(0, config['template_file'])
                    self.update_output_filename()
        except Exception as e:
            pass  # 配置加载失败不影响使用

    def save_config(self):
        """保存当前配置"""
        try:
            config = {
                'subscription_url': self.url_entry.get().strip(),
                'template_file': self.template_entry.get().strip()
            }
            with open(self.config_file, 'w', encoding='utf-8') as f:
                json.dump(config, f, ensure_ascii=False, indent=2)
        except Exception as e:
            pass  # 配置保存失败不影响使用


def main():
    root = tk.Tk()
    app = SubscriptionConverterGUI(root)
    root.mainloop()


if __name__ == "__main__":
    main()



