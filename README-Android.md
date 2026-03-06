# Clash Meta Android 配置模板

## 简介

专为 Android 设备优化的 Clash Meta 配置模板,针对移动网络环境进行性能调优。

## Android 专属优化

### 网络性能
- MTU 1400: 适配移动网络,避免数据包分片
- Auto-redirect: Android TUN 模式必需
- Route-exclude: 避免本地网络路由冲突

### 电池优化
- 测速间隔 600s: 减少后台活动
- Lazy 加载: 按需测速,降低功耗
- find-process-mode: off (移动端适配)

### 安全性
- IPv6 禁用: 防止 DNS 泄漏
- 随机指纹: 降低识别风险
- 本地 DNS 监听: 127.0.0.1:1053

## 使用方法

1. **替换订阅链接**
   ```yaml
   proxy-providers:
     Airport1:
       url: "YOUR_SUBSCRIPTION_URL_HERE"
   ```

2. **导入到 Android 客户端**
   - Clash Meta for Android
   - ClashMetaForAndroid
   - 其他支持 Meta 内核的客户端

3. **启用 TUN 模式**
   - 需要 VPN 权限
   - 首次使用需授权

## 性能对比

| 配置项 | 通用版 | Android 优化版 |
|--------|--------|----------------|
| MTU | 1500 | 1400 (移动网络优化) |
| 测速频率 | 300s | 600s (省电) |
| TUN 设备 | 通用 | Mihomo (兼容性) |
| DNS 监听 | 全接口 | 本地 (安全) |

## 注意事项

- 首次启动需下载规则集,请连接 WiFi
- TUN 模式需要 VPN 权限
- 部分国产 ROM 可能需要关闭省电优化

## 兼容性

- Android 7.0+
- 推荐 Android 10+
- 需要 Clash Meta 内核

## 许可

仅供学习交流使用。
