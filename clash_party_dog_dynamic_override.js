// Clash Party 2.0.0 JavaScript 覆写
// 目标：保留订阅节点及其他有效原始配置，移除内核已废弃字段，优化 DNS fallback 链路，并使用目标文件的代理组、规则集和规则。
// 来源 YAML SHA-256: 59EC50FC9760B8DB7DAD3DF381D4EAF4BEBDA7AB5EF472D65BCE9E92EE50EDB7
// 生成日期：2026-07-20

const TARGET_CONFIG = {
  "rule-providers": {
    "category-ads-all": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/category-ads-all.mrs",
      "path": "./ruleset/category-ads-all.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "private": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/private.mrs",
      "path": "./ruleset/private.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "private-ip": {
      "type": "http",
      "behavior": "ipcidr",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/private.mrs",
      "path": "./ruleset/private-ip.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "geolocation-cn": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/geolocation-cn.mrs",
      "path": "./ruleset/geolocation-cn.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "cn-ip": {
      "type": "http",
      "behavior": "ipcidr",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/cn.mrs",
      "path": "./ruleset/cn-ip.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "geolocation-!cn": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/geolocation-!cn.mrs",
      "path": "./ruleset/geolocation-!cn.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "openai": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/openai.mrs",
      "path": "./ruleset/openai.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "anthropic": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/anthropic.mrs",
      "path": "./ruleset/anthropic.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "category-ai-chat-!cn": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/category-ai-chat-!cn.mrs",
      "path": "./ruleset/category-ai-chat-!cn.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "google-gemini": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/google-gemini.mrs",
      "path": "./ruleset/google-gemini.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "youtube": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/youtube.mrs",
      "path": "./ruleset/youtube.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "google": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/google.mrs",
      "path": "./ruleset/google.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "google-ip": {
      "type": "http",
      "behavior": "ipcidr",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/google.mrs",
      "path": "./ruleset/google-ip.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "telegram": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/telegram.mrs",
      "path": "./ruleset/telegram.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "telegram-ip": {
      "type": "http",
      "behavior": "ipcidr",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/telegram.mrs",
      "path": "./ruleset/telegram-ip.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "twitter": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/twitter.mrs",
      "path": "./ruleset/twitter.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "twitter-ip": {
      "type": "http",
      "behavior": "ipcidr",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/twitter.mrs",
      "path": "./ruleset/twitter-ip.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "discord": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/discord.mrs",
      "path": "./ruleset/discord.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "bahamut": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/bahamut.mrs",
      "path": "./ruleset/bahamut.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "biliintl": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/biliintl.mrs",
      "path": "./ruleset/biliintl.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "niconico": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/niconico.mrs",
      "path": "./ruleset/niconico.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "abema": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/abema.mrs",
      "path": "./ruleset/abema.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "viu": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/viu.mrs",
      "path": "./ruleset/viu.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "kktv": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/kktv.mrs",
      "path": "./ruleset/kktv.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "github": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/github.mrs",
      "path": "./ruleset/github.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "gitlab": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/gitlab.mrs",
      "path": "./ruleset/gitlab.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "atlassian": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/atlassian.mrs",
      "path": "./ruleset/atlassian.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "aws": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/aws.mrs",
      "path": "./ruleset/aws.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "azure": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/azure.mrs",
      "path": "./ruleset/azure.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "cloudflare": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/cloudflare.mrs",
      "path": "./ruleset/cloudflare.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "digitalocean": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/digitalocean.mrs",
      "path": "./ruleset/digitalocean.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "vercel": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/vercel.mrs",
      "path": "./ruleset/vercel.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "netlify": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/netlify.mrs",
      "path": "./ruleset/netlify.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "cloudflare-ip": {
      "type": "http",
      "behavior": "ipcidr",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/cloudflare.mrs",
      "path": "./ruleset/cloudflare-ip.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "docker": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/docker.mrs",
      "path": "./ruleset/docker.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "npmjs": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/npmjs.mrs",
      "path": "./ruleset/npmjs.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "jetbrains": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/jetbrains.mrs",
      "path": "./ruleset/jetbrains.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "stackexchange": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/stackexchange.mrs",
      "path": "./ruleset/stackexchange.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "dropbox": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/dropbox.mrs",
      "path": "./ruleset/dropbox.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "notion": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/notion.mrs",
      "path": "./ruleset/notion.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "paypal": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/paypal.mrs",
      "path": "./ruleset/paypal.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "stripe": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/stripe.mrs",
      "path": "./ruleset/stripe.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "wise": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/wise.mrs",
      "path": "./ruleset/wise.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "binance": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/binance.mrs",
      "path": "./ruleset/binance.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "google-scholar": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/google-scholar.mrs",
      "path": "./ruleset/google-scholar.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "category-scholar-!cn": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/category-scholar-!cn.mrs",
      "path": "./ruleset/category-scholar-!cn.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "coursera": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/coursera.mrs",
      "path": "./ruleset/coursera.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "udemy": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/udemy.mrs",
      "path": "./ruleset/udemy.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "edx": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/edx.mrs",
      "path": "./ruleset/edx.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "khanacademy": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/khanacademy.mrs",
      "path": "./ruleset/khanacademy.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "wikimedia": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/wikimedia.mrs",
      "path": "./ruleset/wikimedia.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "bbc": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/bbc.mrs",
      "path": "./ruleset/bbc.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "cnn": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/cnn.mrs",
      "path": "./ruleset/cnn.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "nytimes": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/nytimes.mrs",
      "path": "./ruleset/nytimes.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "wsj": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/wsj.mrs",
      "path": "./ruleset/wsj.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "bloomberg": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/bloomberg.mrs",
      "path": "./ruleset/bloomberg.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "amazon": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/amazon.mrs",
      "path": "./ruleset/amazon.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "ebay": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/ebay.mrs",
      "path": "./ruleset/ebay.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "category-porn": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/category-porn.mrs",
      "path": "./ruleset/category-porn.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "cn": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/cn.mrs",
      "path": "./ruleset/cn.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "category-ai-cn": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/category-ai-cn.mrs",
      "path": "./ruleset/category-ai-cn.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "acl4ssr-ban-program-ad": {
      "type": "http",
      "behavior": "domain",
      "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/mrs/BanProgramAD_domain.mrs",
      "path": "./ruleset/acl4ssr-ban-program-ad.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "acl4ssr-ban-ad": {
      "type": "http",
      "behavior": "domain",
      "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/mrs/BanAD_domain.mrs",
      "path": "./ruleset/acl4ssr-ban-ad.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "acl4ssr-ban-easylist-china": {
      "type": "http",
      "behavior": "domain",
      "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/mrs/BanEasyListChina_domain.mrs",
      "path": "./ruleset/acl4ssr-ban-easylist-china.mrs",
      "interval": 86400,
      "format": "mrs"
    },
    "linuxdo": {
      "type": "http",
      "behavior": "domain",
      "url": "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/linuxdo.mrs",
      "path": "./ruleset/linuxdo.mrs",
      "interval": 86400,
      "format": "mrs"
    }
  },
  "rules": [
    "DOMAIN-SUFFIX,zffdo.online,🚀 节点选择",
    "RULE-SET,private,🏠 私有网络",
    "RULE-SET,private-ip,🏠 私有网络,no-resolve",
    "RULE-SET,category-ai-cn,DIRECT",
    "RULE-SET,acl4ssr-ban-program-ad,🍃 应用净化",
    "RULE-SET,acl4ssr-ban-ad,🛑 广告拦截",
    "RULE-SET,category-ads-all,🛑 广告拦截",
    "RULE-SET,acl4ssr-ban-easylist-china,🆎 增强广告拦截",
    "RULE-SET,linuxdo,💻 Linux.DO",
    "RULE-SET,google-gemini,✨ Gemini",
    "RULE-SET,openai,🤖 AI 服务",
    "RULE-SET,anthropic,🤖 AI 服务",
    "RULE-SET,category-ai-chat-!cn,🤖 AI 服务",
    "RULE-SET,youtube,📹 油管视频",
    "RULE-SET,google-scholar,🎓 谷歌学术",
    "RULE-SET,google,🔍 谷歌服务",
    "RULE-SET,google-ip,🔍 谷歌服务,no-resolve",
    "RULE-SET,category-scholar-!cn,📚 教育学术",
    "RULE-SET,coursera,📚 教育学术",
    "RULE-SET,udemy,📚 教育学术",
    "RULE-SET,edx,📚 教育学术",
    "RULE-SET,khanacademy,📚 教育学术",
    "RULE-SET,wikimedia,📚 教育学术",
    "RULE-SET,telegram,📲 电报消息",
    "RULE-SET,telegram-ip,📲 电报消息,no-resolve",
    "RULE-SET,twitter,🐦 推特/X",
    "RULE-SET,twitter-ip,🐦 推特/X,no-resolve",
    "RULE-SET,discord,🎙️ Discord",
    "RULE-SET,bahamut,🎌 亚洲流媒体",
    "RULE-SET,biliintl,🎌 亚洲流媒体",
    "RULE-SET,niconico,🎌 亚洲流媒体",
    "RULE-SET,abema,🎌 亚洲流媒体",
    "RULE-SET,viu,🎌 亚洲流媒体",
    "RULE-SET,kktv,🎌 亚洲流媒体",
    "RULE-SET,github,🐱 代码托管",
    "RULE-SET,gitlab,🐱 代码托管",
    "RULE-SET,atlassian,🐱 代码托管",
    "RULE-SET,docker,🛠️ 开发工具",
    "RULE-SET,npmjs,🛠️ 开发工具",
    "RULE-SET,jetbrains,🛠️ 开发工具",
    "RULE-SET,stackexchange,🛠️ 开发工具",
    "RULE-SET,dropbox,💾 网盘存储",
    "RULE-SET,notion,💾 网盘存储",
    "RULE-SET,paypal,💳 支付平台",
    "RULE-SET,stripe,💳 支付平台",
    "RULE-SET,wise,💳 支付平台",
    "RULE-SET,binance,₿ 加密货币",
    "RULE-SET,bbc,📰 新闻资讯",
    "RULE-SET,cnn,📰 新闻资讯",
    "RULE-SET,nytimes,📰 新闻资讯",
    "RULE-SET,wsj,📰 新闻资讯",
    "RULE-SET,bloomberg,📰 新闻资讯",
    "RULE-SET,amazon,🛒 海淘购物",
    "RULE-SET,ebay,🛒 海淘购物",
    "RULE-SET,category-porn,🔞 成人内容",
    "RULE-SET,aws,☁️ 云服务",
    "RULE-SET,azure,☁️ 云服务",
    "RULE-SET,cloudflare,☁️ 云服务",
    "RULE-SET,digitalocean,☁️ 云服务",
    "RULE-SET,vercel,☁️ 云服务",
    "RULE-SET,netlify,☁️ 云服务",
    "RULE-SET,cloudflare-ip,☁️ 云服务,no-resolve",
    "RULE-SET,geolocation-cn,🔒 国内服务",
    "RULE-SET,cn-ip,🔒 国内服务,no-resolve",
    "RULE-SET,cn,🔒 国内服务",
    "RULE-SET,geolocation-!cn,🌍 非中国",
    "MATCH,🐟 漏网之鱼"
  ],
  "proxy-groups": [
    {
      "name": "🚀 节点选择",
      "type": "select",
      "proxies": [
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ],
      "include-all": true,
      "exclude-filter": "(?i)(剩余|流量|套餐|到期|过期|官网|网址|客服|重置|订阅|公告|通知|Traffic|Expire|Reset|Official|Website|QQ群|TG群|官方群|交流群)"
    },
    {
      "name": "⚡ 自动选择",
      "type": "url-test",
      "proxies": [
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点"
      ],
      "url": "https://www.gstatic.com/generate_204",
      "interval": 600,
      "lazy": true,
      "tolerance": 50,
      "include-all": false
    },
    {
      "name": "💻 Linux.DO",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT"
      ]
    },
    {
      "name": "🤖 AI 服务",
      "type": "select",
      "proxies": [
        "🇺🇸 美国",
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "✨ Gemini",
      "type": "select",
      "proxies": [
        "🇺🇸 美国",
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "🎓 谷歌学术",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "🔍 谷歌服务",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "📹 油管视频",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "📚 教育学术",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "📲 电报消息",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "🐦 推特/X",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "🎙️ Discord",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "🐱 代码托管",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "🛠️ 开发工具",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "☁️ 云服务",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "💾 网盘存储",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "🎌 亚洲流媒体",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "💳 支付平台",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "₿ 加密货币",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "📰 新闻资讯",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "🛒 海淘购物",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "🔞 成人内容",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "🛑 广告拦截",
      "type": "select",
      "proxies": [
        "REJECT",
        "DIRECT",
        "🚀 节点选择"
      ]
    },
    {
      "name": "🍃 应用净化",
      "type": "select",
      "proxies": [
        "REJECT",
        "DIRECT"
      ]
    },
    {
      "name": "🆎 增强广告拦截",
      "type": "select",
      "proxies": [
        "REJECT",
        "DIRECT"
      ]
    },
    {
      "name": "🚄 专线节点",
      "type": "url-test",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)(专线|IPLC|IEPL|Premium)",
      "exclude-filter": "(?i)(剩余|流量|套餐|到期|过期|官网|网址|客服|重置|订阅|公告|通知|Traffic|Expire|Reset|Official|Website|QQ群|TG群|官方群|交流群)",
      "url": "https://www.gstatic.com/generate_204",
      "interval": 1200,
      "lazy": true,
      "tolerance": 50
    },
    {
      "name": "🇭🇰 香港",
      "type": "url-test",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)(🇭🇰|香港|Hong\\s*Kong|\\bHK\\b)",
      "exclude-filter": "(?i)(剩余|流量|套餐|到期|过期|官网|网址|客服|重置|订阅|公告|通知|Traffic|Expire|Reset|Official|Website|QQ群|TG群|官方群|交流群)",
      "url": "https://www.gstatic.com/generate_204",
      "interval": 1200,
      "lazy": true,
      "tolerance": 50
    },
    {
      "name": "🇸🇬 新加坡",
      "type": "url-test",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)(🇸🇬|新加坡|Singapore|\\bSG\\b)",
      "exclude-filter": "(?i)(剩余|流量|套餐|到期|过期|官网|网址|客服|重置|订阅|公告|通知|Traffic|Expire|Reset|Official|Website|QQ群|TG群|官方群|交流群)",
      "url": "https://www.gstatic.com/generate_204",
      "interval": 1200,
      "lazy": true,
      "tolerance": 50
    },
    {
      "name": "🇯🇵 日本",
      "type": "url-test",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)(🇯🇵|日本|Tokyo|Osaka|\\bJP\\b)",
      "exclude-filter": "(?i)(剩余|流量|套餐|到期|过期|官网|网址|客服|重置|订阅|公告|通知|Traffic|Expire|Reset|Official|Website|QQ群|TG群|官方群|交流群)",
      "url": "https://www.gstatic.com/generate_204",
      "interval": 1200,
      "lazy": true,
      "tolerance": 50
    },
    {
      "name": "🇺🇸 美国",
      "type": "url-test",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)(🇺🇸|美国|United\\s*States|Los\\s*Angeles|San\\s*Jose|San\\s*Francisco|Seattle|Washington|Las\\s*Vegas|\\bUS\\b)",
      "exclude-filter": "(?i)(剩余|流量|套餐|到期|过期|官网|网址|客服|重置|订阅|公告|通知|Traffic|Expire|Reset|Official|Website|QQ群|TG群|官方群|交流群)",
      "url": "https://www.gstatic.com/generate_204",
      "interval": 1200,
      "lazy": true,
      "tolerance": 50
    },
    {
      "name": "🇹🇼 台湾",
      "type": "url-test",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)(🇹🇼|台湾|Taiwan|Taipei|\\bTW\\b)",
      "exclude-filter": "(?i)(剩余|流量|套餐|到期|过期|官网|网址|客服|重置|订阅|公告|通知|Traffic|Expire|Reset|Official|Website|QQ群|TG群|官方群|交流群)",
      "url": "https://www.gstatic.com/generate_204",
      "interval": 1200,
      "lazy": true,
      "tolerance": 50
    },
    {
      "name": "🇰🇷 韩国",
      "type": "url-test",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)(🇰🇷|韩国|Korea|Seoul|\\bKR\\b)",
      "exclude-filter": "(?i)(剩余|流量|套餐|到期|过期|官网|网址|客服|重置|订阅|公告|通知|Traffic|Expire|Reset|Official|Website|QQ群|TG群|官方群|交流群)",
      "url": "https://www.gstatic.com/generate_204",
      "interval": 1200,
      "lazy": true,
      "tolerance": 50
    },
    {
      "name": "🇨🇦 加拿大",
      "type": "url-test",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)(🇨🇦|加拿大|Canada|Toronto|Vancouver|\\bCA\\b)",
      "exclude-filter": "(?i)(剩余|流量|套餐|到期|过期|官网|网址|客服|重置|订阅|公告|通知|Traffic|Expire|Reset|Official|Website|QQ群|TG群|官方群|交流群)",
      "url": "https://www.gstatic.com/generate_204",
      "interval": 1200,
      "lazy": true,
      "tolerance": 50
    },
    {
      "name": "🇩🇪 德国",
      "type": "url-test",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)(🇩🇪|德国|Germany|Frankfurt|\\bDE\\b)",
      "exclude-filter": "(?i)(剩余|流量|套餐|到期|过期|官网|网址|客服|重置|订阅|公告|通知|Traffic|Expire|Reset|Official|Website|QQ群|TG群|官方群|交流群)",
      "url": "https://www.gstatic.com/generate_204",
      "interval": 1200,
      "lazy": true,
      "tolerance": 50
    },
    {
      "name": "🌐 其他地区",
      "type": "url-test",
      "proxies": [],
      "include-all": true,
      "exclude-filter": "(?i)(剩余|流量|套餐|到期|过期|官网|网址|客服|重置|订阅|公告|通知|Traffic|Expire|Reset|Official|Website|QQ群|TG群|官方群|交流群|🇺🇸|美国|United\\s*States|Los\\s*Angeles|San\\s*Jose|San\\s*Francisco|Seattle|Washington|Las\\s*Vegas|\\bUS\\b|🇭🇰|香港|Hong\\s*Kong|\\bHK\\b|🇯🇵|日本|Tokyo|Osaka|\\bJP\\b|🇸🇬|新加坡|Singapore|\\bSG\\b|🇹🇼|台湾|Taiwan|Taipei|\\bTW\\b|🇰🇷|韩国|Korea|Seoul|\\bKR\\b|🇨🇦|加拿大|Canada|Toronto|Vancouver|\\bCA\\b|🇩🇪|德国|Germany|Frankfurt|\\bDE\\b)",
      "url": "https://www.gstatic.com/generate_204",
      "interval": 1200,
      "lazy": true,
      "tolerance": 50
    },
    {
      "name": "🔐 AnyTLS",
      "type": "url-test",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)(AnyTLS)",
      "exclude-filter": "(?i)(剩余|流量|套餐|到期|过期|官网|网址|客服|重置|订阅|公告|通知|Traffic|Expire|Reset|Official|Website|QQ群|TG群|官方群|交流群)",
      "url": "https://www.gstatic.com/generate_204",
      "interval": 1200,
      "lazy": true,
      "tolerance": 50
    },
    {
      "name": "🌊 Hysteria2",
      "type": "url-test",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)(Hysteria2|\\(hy2\\))",
      "exclude-filter": "(?i)(剩余|流量|套餐|到期|过期|官网|网址|客服|重置|订阅|公告|通知|Traffic|Expire|Reset|Official|Website|QQ群|TG群|官方群|交流群)",
      "url": "https://www.gstatic.com/generate_204",
      "interval": 1200,
      "lazy": true,
      "tolerance": 50
    },
    {
      "name": "🛡️ Mieru",
      "type": "url-test",
      "proxies": [],
      "include-all": true,
      "filter": "(?i)(Mieru|\\(M\\)$)",
      "exclude-filter": "(?i)(剩余|流量|套餐|到期|过期|官网|网址|客服|重置|订阅|公告|通知|Traffic|Expire|Reset|Official|Website|QQ群|TG群|官方群|交流群)",
      "url": "https://www.gstatic.com/generate_204",
      "interval": 1200,
      "lazy": true,
      "tolerance": 50
    },
    {
      "name": "🏠 私有网络",
      "type": "select",
      "proxies": [
        "DIRECT",
        "REJECT",
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点"
      ]
    },
    {
      "name": "🔒 国内服务",
      "type": "select",
      "proxies": [
        "DIRECT",
        "REJECT",
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点"
      ]
    },
    {
      "name": "🌍 非中国",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    },
    {
      "name": "🐟 漏网之鱼",
      "type": "select",
      "proxies": [
        "🚀 节点选择",
        "⚡ 自动选择",
        "🇺🇸 美国",
        "🇭🇰 香港",
        "🇯🇵 日本",
        "🇸🇬 新加坡",
        "🇹🇼 台湾",
        "🇰🇷 韩国",
        "🇨🇦 加拿大",
        "🇩🇪 德国",
        "🌐 其他地区",
        "🔐 AnyTLS",
        "🌊 Hysteria2",
        "🛡️ Mieru",
        "🚄 专线节点",
        "DIRECT",
        "REJECT"
      ]
    }
  ]
};
const DNS_FALLBACK_SERVERS = ["https://1.1.1.1/dns-query#⚡ 自动选择", "https://8.8.8.8/dns-query#⚡ 自动选择"];
const PROXY_SERVER_NAMESERVERS = ["https://223.5.5.5/dns-query", "https://doh.pub/dns-query", "https://dns.alidns.com/dns-query"];
const FALLBACK_FILTER_IPCIDR = ["240.0.0.0/4", "0.0.0.0/32", "127.0.0.1/32", "100.64.0.0/10"];
const FALLBACK_FILTER_DOMAINS = ["+.google.com", "+.facebook.com", "+.twitter.com", "+.youtube.com", "+.xn--ngstr-lra8j.com", "+.google.cn", "+.googleapis.cn", "+.googleapis.com", "+.gvt1.com", "+.linux.do", "+.ldstatic.com"];

const BUILTIN_TARGETS = new Set(["DIRECT", "REJECT", "REJECT-DROP", "PASS", "COMPATIBLE"]);

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function stripDnsSkipCertVerify(value) {
  if (typeof value === "string") {
    const hashIndex = value.indexOf("#");
    if (hashIndex < 0) return value;
    const base = value.slice(0, hashIndex);
    const options = value
      .slice(hashIndex + 1)
      .split("&")
      .filter((option) => option.trim().toLowerCase() !== "skip-cert-verify=true");
    return options.length > 0 ? `${base}#${options.join("&")}` : base;
  }
  if (Array.isArray(value)) return value.map(stripDnsSkipCertVerify);
  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, stripDnsSkipCertVerify(item)])
    );
  }
  return value;
}

function mergeUnique(left, right) {
  return [...new Set([...(Array.isArray(left) ? left : []), ...right])];
}

function optimizeDnsConfig(value) {
  const result = stripDnsSkipCertVerify(value);
  if (!isPlainObject(result)) return result;

  if (!Array.isArray(result.fallback) || !result.fallback.some((item) => typeof item === "string" && item.trim())) {
    result.fallback = [...DNS_FALLBACK_SERVERS];
  }
  if (!Array.isArray(result["proxy-server-nameserver"]) || !result["proxy-server-nameserver"].some((item) => typeof item === "string" && item.trim())) {
    result["proxy-server-nameserver"] = [...PROXY_SERVER_NAMESERVERS];
  }
  if (!isPlainObject(result["proxy-server-nameserver-policy"]) && isPlainObject(result["nameserver-policy"])) {
    result["proxy-server-nameserver-policy"] = JSON.parse(JSON.stringify(result["nameserver-policy"]));
  }

  const fallbackFilter = isPlainObject(result["fallback-filter"])
    ? JSON.parse(JSON.stringify(result["fallback-filter"]))
    : {};
  fallbackFilter.geoip = true;
  fallbackFilter["geoip-code"] = "CN";
  fallbackFilter.ipcidr = mergeUnique(fallbackFilter.ipcidr, FALLBACK_FILTER_IPCIDR);
  fallbackFilter.domain = mergeUnique(fallbackFilter.domain, FALLBACK_FILTER_DOMAINS);
  result["fallback-filter"] = fallbackFilter;
  result["fallback-lazy-query"] = true;
  return result;
}

function ruleTarget(rule) {
  if (typeof rule !== "string") return null;
  const parts = rule.split(",").map((part) => part.trim());
  if (parts[0] === "MATCH" && parts.length >= 2) return parts[1];
  if (parts.length >= 3) return parts[2];
  return null;
}

function main(config) {
  const sourceProxies = Array.isArray(config?.proxies) ? config.proxies : [];
  const sourceProviders = isPlainObject(config?.["proxy-providers"])
    ? config["proxy-providers"]
    : {};

  if (sourceProxies.length === 0 && Object.keys(sourceProviders).length === 0) {
    throw new Error("当前订阅没有可用的 proxies 或 proxy-providers，已停止覆写");
  }

  const next = JSON.parse(JSON.stringify(config));
  // Mihomo v1.19.29 已移除顶层全局指纹；节点自带的 client-fingerprint 保持不变。
  delete next["global-client-fingerprint"];
  if (isPlainObject(next.dns)) {
    next.dns = optimizeDnsConfig(next.dns);
  }
  next["proxy-groups"] = JSON.parse(JSON.stringify(TARGET_CONFIG["proxy-groups"]));
  next["rule-providers"] = JSON.parse(JSON.stringify(TARGET_CONFIG["rule-providers"]));
  next.rules = JSON.parse(JSON.stringify(TARGET_CONFIG.rules));

  const proxyNames = new Set(
    sourceProxies
      .filter((proxy) => isPlainObject(proxy) && typeof proxy.name === "string")
      .map((proxy) => proxy.name)
  );
  const groupNames = new Set(
    (next["proxy-groups"] || [])
      .filter((group) => isPlainObject(group) && typeof group.name === "string")
      .map((group) => group.name)
  );

  for (const group of next["proxy-groups"] || []) {
    for (const ref of group.proxies || []) {
      if (!groupNames.has(ref) && !proxyNames.has(ref) && !BUILTIN_TARGETS.has(ref)) {
        throw new Error(`代理组 ${group.name} 存在无效引用：${ref}`);
      }
    }
  }

  const providerNames = new Set(Object.keys(next["rule-providers"] || {}));
  for (const rule of next.rules || []) {
    if (typeof rule !== "string") continue;
    const parts = rule.split(",").map((part) => part.trim());
    if (parts[0] === "RULE-SET" && !providerNames.has(parts[1])) {
      throw new Error(`规则引用了未定义的规则集：${parts[1]}`);
    }
    const target = ruleTarget(rule);
    if (target && !groupNames.has(target) && !BUILTIN_TARGETS.has(target)) {
      throw new Error(`规则引用了未定义的策略组：${target}`);
    }
  }

  console.info(
    `动态覆写完成：${sourceProxies.length} 个节点，${Object.keys(sourceProviders).length} 个节点集合，` +
      `${groupNames.size} 个代理组，${providerNames.size} 个规则集，${(next.rules || []).length} 条规则`
  );
  return next;
}
