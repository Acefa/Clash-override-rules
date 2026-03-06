# Clash Meta 配置模板

## 简介

这是一个优化的 Clash Meta 配置模板,融合了安全性、性能和稳定性的最佳实践。

## 主要特性

### 安全性增强
- IPv6 禁用,防止 DNS 泄漏
- 随机客户端指纹,降低被识别风险
- Telegram IP 段跳过嗅探,保护隐私
- 仅本地访问 (127.0.0.1)

### 性能优化
- 使用 Cloudflare 测速节点 (全球可达)
- 测速间隔 600s,减少频繁测速
- 容差 100ms,减少节点切换
- Lazy 加载,按需测速
- 优先使用 .mrs 格式规则 (更高效)

### DNS 优化
- Fake-IP 模式,加速解析
- Cloudflare DNS 作为 fallback
- 过滤无效 IP (0.0.0.0/32)
- 国内外 DNS 分流

## 使用方法

1. **替换订阅链接**
   ```yaml
   proxy-providers:
     Airport1:
       url: "YOUR_SUBSCRIPTION_URL_HERE"  # 替换为你的机场订阅链接
   ```

2. **调整端口 (可选)**
   ```yaml
   mixed-port: 7890  # 默认 7890,可根据需要修改
   ```

3. **导入配置**
   - 将文件导入到 Clash Meta 客户端
   - 或使用配置文件路径

## 代理组说明

- **节点选择**: 主要出站策略
- **自动选择**: 自动测速选择最快节点
- **手动切换**: 手动选择任意节点
- **AI-UNHK**: AI 服务专用 (排除香港节点)
- **地区节点**: 香港/台湾/日本/美国/新加坡/韩国
- **应用分流**: OpenAI/Telegram/YouTube/Netflix 等

## 规则优先级

1. 局域网直连
2. 广告拦截
3. 应用分流 (AI/Google/Microsoft/Apple 等)
4. 媒体服务 (YouTube/Netflix/Bilibili 等)
5. GFW 列表
6. 中国域名/IP 直连
7. 漏网之鱼

## 注意事项

- 首次使用需要下载规则集,请耐心等待
- 规则集每 48 小时自动更新
- 建议定期更新订阅节点

## 兼容性

- 适用于 Clash Meta (mihomo) 内核
- 支持 Windows/macOS/Linux/Android

## 许可

本配置模板基于开源规则集构建,仅供学习交流使用。
