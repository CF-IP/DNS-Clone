const showSubscriptionButton = false;  //true 开启
const subscriptionPath = 'dudu';  //dudu 订阅

const accessKey = 'd342d11e-d424-4583-b36e-524ab1f0afa4'
// 明文  'd342d11e-d424-4583-b36e-524ab1f0afa4'
// 数组  [100, 51, 52, 50, 100, 49, 49, 101, 45, 100, 52, 50, 52, 45, 52, 53, 56, 51, 45, 98, 51, 54, 101, 45, 53, 50, 52, 97, 98, 49, 102, 48, 97, 102, 97, 52]; 
const fallbackTarget = [117, 115, 46, 54, 54, 53, 57, 54, 54, 46, 120, 121, 122];
const aliasTargetHostname = [115, 103, 46, 54, 54, 53, 57, 54, 54, 46, 120, 121, 122];

const priorityEndpoints = [
    'TG：@Crow187 www.akzai.store',
    'TG：@Crow187 hk.pyip.xx.kg',
    'TG：@Crow187 www.wto.org',
    'TG：@Crow187 mfa.gov.ua',
    'TG：@Crow187 openai.com'
];

const ipListUrls = [
    'https://github.com/Senflare/Senflare-DNS-IP/raw/refs/heads/main/YXhost.txt',
    [104, 116, 116, 112, 115, 58, 47, 47, 114, 97, 119, 46, 103, 105, 116, 104, 117, 98, 117, 115, 101, 114, 99, 111, 110, 116, 101, 110, 116, 46, 99, 111, 109, 47, 67, 70, 45, 73, 80, 47, 99, 102, 45, 105, 112, 46, 103, 105, 116, 104, 117, 98, 46, 105, 111, 47, 114, 101, 102, 115, 47, 104, 101, 97, 100, 115, 47, 109, 97, 105, 110, 47, 100, 97, 116, 97, 47, 115, 121, 46, 116, 120, 116],
    [104, 116, 116, 112, 115, 58, 47, 47, 114, 97, 119, 46, 103, 105, 116, 104, 117, 98, 117, 115, 101, 114, 99, 111, 110, 116, 101, 110, 116, 46, 99, 111, 109, 47, 67, 70, 45, 73, 80, 47, 99, 102, 45, 105, 112, 46, 103, 105, 116, 104, 117, 98, 46, 105, 111, 47, 114, 101, 102, 115, 47, 104, 101, 97, 100, 115, 47, 109, 97, 105, 110, 47, 100, 97, 116, 97, 47, 112, 114, 111, 120, 121, 46, 116, 120, 116]
];

const subscriptionConverter = 'https://sub.1874.eu.org';

import { connect } from 'cloudflare:sockets';

function decode(a) { try { return String.fromCharCode.apply(null, a) } catch (b) { return '' } }
function normalizeKey(a) { if (typeof a === 'string') return a; if (Array.isArray(a)) return decode(a); return "" }

const voc = {
    vless: [118, 108, 101, 115, 115],
    proxyip: [112, 114, 111, 120, 121, 105, 112],
    ip: [105, 112],
    gs5: [103, 115, 53],
    socks5: [115, 111, 99, 107, 115, 53],
    ghttp: [103, 104, 116, 116, 112],
    http: [104, 116, 116, 112],
    ua: [117, 115, 101, 114, 45, 97, 103, 101, 110, 116],
    upgrade: [85, 112, 103, 114, 97, 100, 101],
    websocket: [119, 101, 98, 115, 111, 99, 107, 101, 116],
    sec_ws_protocol: [115, 101, 99, 45, 119, 101, 98, 115, 111, 99, 107, 101, 116, 45, 112, 114, 111, 116, 111, 99, 111, 108],
    dns_query: [104, 116, 116, 112, 115, 58, 47, 47, 100, 110, 115, 46, 103, 111, 111, 103, 108, 101, 47, 100, 110, 115, 45, 113, 117, 101, 114, 121],
    content_type: [99, 111, 110, 116, 101, 101, 110, 116, 45, 116, 121, 112, 101],
    dns_message: [97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 100, 110, 115, 45, 109, 101, 115, 115, 97, 103, 101],
    doh_url_prefix: [104, 116, 116, 112, 115, 58, 47, 47, 99, 108, 111, 117, 100, 102, 108, 97, 114, 101, 45, 100, 110, 115, 46, 99, 111, 109, 47, 100, 110, 115, 45, 113, 117, 101, 114, 121, 63, 110, 97, 109, 101, 61],
    doh_url_suffix: [38, 116, 121, 112, 101, 61, 65],
    doh_accept_header: [97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 100, 110, 115, 45, 106, 115, 111, 110],
    host: [72, 111, 115, 116],
    proxy_auth: [80, 114, 111, 120, 121, 45, 65, 117, 116, 104, 111, 114, 105, 122, 97, 116, 105, 111, 110],
    basic: [66, 97, 115, 105, 99, 32],
    proxy_connection: [80, 114, 111, 120, 121, 45, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110],
    keep_alive: [75, 101, 101, 112, 45, 65, 108, 105, 118, 101],
    connection: [67, 111, 110, 110, 101, 99, 116, 105, 111, 110],
    connect_method: [67, 79, 78, 78, 69, 67, 84],
    nodes: [110, 111, 100, 101, 115],
    content_type_text: [116, 101, 120, 116, 47, 112, 108, 97, 105, 110, 59, 32, 99, 104, 97, 114, 115, 101, 116, 61, 117, 116, 102, 45, 56],
    cache_control: [67, 97, 99, 104, 101, 45, 67, 111, 110, 116, 114, 111, 108],
    max_age_300: [109, 97, 120, 45, 97, 103, 101, 61, 51, 48, 48],
    badRequest: [66, 97, 100, 32, 82, 101, 113, 117, 101, 115, 116],
    unsupportedProtocol: [85, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 112, 114, 111, 116, 111, 99, 111, 108],
    authFailed: [65, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 105, 111, 110, 32, 102, 97, 105, 108, 101, 100],
    invalidHeader: [73, 110, 118, 97, 108, 105, 100, 32, 104, 101, 97, 100, 101, 114],
    user_agent_h: [85, 115, 101, 114, 45, 65, 103, 101, 110, 116],
    win_ua: [77, 111, 122, 105, 108, 108, 97, 47, 53, 46, 48, 32, 40, 87, 105, 110, 100, 111, 119, 115, 32, 78, 84, 32, 49, 48, 46, 48, 59, 32, 87, 105, 110, 54, 52, 59, 32, 120, 54, 52, 41, 32, 65, 112, 112, 108, 101, 87, 101, 98, 75, 105, 116, 47, 53, 51, 55, 46, 51, 54]
};

const config = { accessKey: accessKey, fallbackTarget: normalizeKey(fallbackTarget), subscriptionConverter: normalizeKey(subscriptionConverter), proxy: { enabled: true }, specialDomains: ['x.com', 'chat.openai.com', 'claude.ai', 'www.perplexity.ai', 'poe.com', 'copilot.microsoft.com', 'www.midjourney.com', 'dreamstudio.ai', 'ideogram.ai', 'leonardo.ai', 'openai.com', 'runwayml.com', 'pika.art', 'platform.openai.com', 'huggingface.co', 'replicate.com', 'suno.ai', 'udio.com', 'gamma.app', 'elevenlabs.io', 'google.com', 'googleapis.com', 'www.kaggle.com', 'www.tensorflow.org', 'gemini.google.com', 'aistudio.google.com', 'x.ai'], ipListUrls: ipListUrls.map(a => normalizeKey(a)), priorityEndpoints: priorityEndpoints, botSignatures: [[118, 50, 114, 97, 121], [99, 108, 97, 115, 104], [115, 105, 110, 103, 45, 98, 111, 120], [115, 104, 97, 100, 111, 119, 114, 111, 99, 107, 101, 116], [99, 117, 114, 108]] };


const flowConfig = { enable: false, chunkSize: 64 };
globalThis.dnsCache = globalThis.dnsCache || new Map();

function isValidIPv4(ip) { const parts = ip.split('.'); if (parts.length !== 4) return false; return parts.every(part => { const num = parseInt(part, 10); return !isNaN(num) && num >= 0 && num <= 255; }); }
function isValidIP(address) { if (isValidIPv4(address)) return true; try { const url = new URL(`http://[${address}]`); return url.hostname === `[${address}]`; } catch (e) { return false; } }
function isValidHostname(a) { if (typeof a !== 'string' || a.length > 253) return !1; if (a.endsWith('.')) a = a.slice(0, -1); return /^([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,63}$/.test(a) || isValidIP(a) }

export default {
    async fetch(a, b, c) {
        const d = new URL(a.url);
        const e = a.headers.get(decode(voc.upgrade));
        if (e && e.toLowerCase() === decode(voc.websocket)) {
            const f = await this.parseStreamConfig(d, b, d.hostname);
            if (!f) { return new Response(decode(voc.badRequest), { status: 400 }) }
            const { 0: client, 1: server } = new WebSocketPair();
            server.accept();
            this.handleDataStream(server, a, f);
            return new Response(null, { status: 101, webSocket: client })
        }
        if (d.pathname.startsWith('/https:/') || d.pathname.startsWith('/http:/')) { return this.handleProxyRequest(a) }
        const g = (a.headers.get(decode(voc.ua)) || '').toLowerCase();
        const h = new RegExp(config.botSignatures.map(decode).join('|'), 'i');
        const i = h.test(g);
        const j = subscriptionPath ? `/${subscriptionPath.replace(/^\//, '')}` : '/';
        if (d.pathname === '/nodes') { return this.handleRawSubscriptionRequest(a, b) }
        if (i && d.pathname === j) { const k = `${d.origin}/nodes`; const l = `${config.subscriptionConverter}/${k}`; const m = await fetch(l, { headers: a.headers }); return new Response(m.body, m) }
        return this.serveHomePage()
    },
    async handleProxyRequest(a) { if (!config.proxy.enabled) { return new Response('代理功能未开启', { status: 403 }) } const b = new URL(a.url); const c = b.pathname.substring(1).replace(':/', '://'); try { const d = new URL(c); const e = ['github.com', 'objects.githubusercontent.com']; if (!e.some(f => d.hostname.endsWith(f))) { return new Response('不支持的代理域名', { status: 400 }) } const g = new Headers(a.headers); g.set('Host', d.hostname); const h = await fetch(d.toString(), { method: a.method, headers: g, body: a.body, }); const i = new Headers(h.headers); i.set('Access-Control-Allow-Origin', '*'); return new Response(h.body, { status: h.status, statusText: h.statusText, headers: i, }) } catch (j) { return new Response('无效的目标URL', { status: 400 }) } },
    serveHomePage() { const homePageHTML = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Pages</title><style>@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap'); :root{--font-family:'Noto Sans SC','Inter',-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;--border-radius-lg:16px;--border-radius-md:12px;--transition-speed:0.35s} body.dark-theme{--bg-color:#0d1117;--bg-aurora-1:#3b82f6;--bg-aurora-2:#8b5cf6;--bg-aurora-3:#ec4899;--card-bg:rgba(22,27,34,0.5);--text-primary:#c9d1d9;--text-secondary:#8b949e;--text-heading:#58a6ff;--accent-primary:#58a6ff;--accent-secondary:#3fb950;--accent-text:#fff;--border-color:rgba(139,148,158,0.2);--border-glow:rgba(88,166,255,0.5);--shadow-color:rgba(88,166,255,0.1);--input-bg:rgba(13,17,23,0.8)} body.light-theme{--bg-color:#f0f2f5;--bg-aurora-1:#60a5fa;--bg-aurora-2:#c084fc;--bg-aurora-3:#fb7185;--card-bg:rgba(255,255,255,0.5);--text-primary:#24292f;--text-secondary:#57606a;--text-heading:#0969da;--accent-primary:#0969da;--accent-secondary:#1a7f37;--accent-text:#fff;--border-color:rgba(27,31,36,0.15);--border-glow:rgba(9,105,218,0.5);--shadow-color:rgba(9,105,218,0.1);--input-bg:rgba(246,248,250,0.8)} *,*::before,*::after{box-sizing:border-box} body{font-family:var(--font-family);line-height:1.6;color:var(--text-primary);background-color:var(--bg-color);margin:0;padding:20px;overflow:hidden;position:relative} @media(max-width:600px){body{padding:10px}} body::before{content:'';position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;background:radial-gradient(ellipse 80% 80% at 20% 20%,var(--bg-aurora-1),transparent),radial-gradient(ellipse 80% 80% at 80% 20%,var(--bg-aurora-2),transparent),radial-gradient(ellipse 80% 80% at 50% 80%,var(--bg-aurora-3),transparent);opacity:0.2;animation:aurora 20s linear infinite} @keyframes aurora{0%{transform:rotate(0deg) scale(1.5)}50%{transform:rotate(180deg) scale(1.2)}100%{transform:rotate(360deg) scale(1.5)}} .page-wrapper{max-width:1200px;margin:0 auto;height:calc(100vh - 40px);display:flex;flex-direction:column} .top-bar{display:flex;justify-content:center;align-items:center;position:relative;margin-bottom:20px;height:40px} .logo{font-size:28px;font-weight:700;background:linear-gradient(90deg,var(--accent-primary),var(--bg-aurora-2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;padding:0 60px;text-align:center} #theme-toggle,.telegram-link{position:absolute;top:0;background:var(--card-bg);border:1px solid var(--border-color);border-radius:50%;width:40px;height:40px;font-size:20px;cursor:pointer;z-index:1000;display:flex;justify-content:center;align-items:center;transition:all var(--transition-speed) ease} #theme-toggle{right:0} .telegram-link{left:0;text-decoration:none} #theme-toggle:hover,.telegram-link:hover{transform:scale(1.1) rotate(15deg);border-color:var(--border-glow)} .container{width:100%;z-index:1;display:flex;flex-direction:column;align-items:center;padding-top:20px} .card-grid{display:grid;grid-template-columns:1fr;gap:120px;width:100%;max-width:800px} .card{background:var(--card-bg);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);border-radius:var(--border-radius-lg);box-shadow:0 8px 32px 0 rgba(0,0,0,0.1);transition:all var(--transition-speed) ease;position:relative;border:1px solid transparent;background-clip:padding-box;padding:24px} .card::before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;margin:-1px;border-radius:inherit;background:linear-gradient(145deg,var(--border-color) 0%,rgba(255,255,255,0) 50%,var(--border-color) 100%)} .card-title{margin:-24px -24px 16px -24px;padding:16px 24px;border-bottom:1px solid var(--border-color);font-size:1.2em;color:var(--text-heading);font-weight:500} .button-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px} .subscription-grid{display:flex;justify-content:center} .btn{padding:12px 24px;border:none;background-image:linear-gradient(45deg,var(--accent-primary),#3182CE 100%);color:var(--accent-text);border-radius:var(--border-radius-md);font-size:16px;font-weight:500;cursor:pointer;transition:all var(--transition-speed) ease;text-align:center;box-shadow:0 4px 15px 0 rgba(49,130,206,0.25);white-space:nowrap} .btn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 20px 0 rgba(49,130,206,0.3)} @media(max-width:600px){.app-download-buttons{grid-template-columns:1fr 1fr}} #toast{position:fixed;top:1.5rem;right:1.5rem;background-color:var(--accent-primary);color:#fff;padding:.8rem 1.2rem;border-radius:8px;z-index:3000;opacity:0;visibility:hidden;transform:translateY(20px);transition:all .3s ease} #toast.show{opacity:1;visibility:visible;transform:translateY(0)} #appModal{display:none;position:fixed;z-index:2000;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.6);justify-content:center;align-items:center;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)} .app-modal-content{background:var(--card-bg);padding:2rem;border:1px solid var(--border-color);border-radius:var(--border-radius-lg);width:95%;max-width:800px;max-height:90vh;overflow-y:auto;box-shadow:0 5px 15px rgba(0,0,0,0.3)} .app-modal-header{display:flex;justify-content:space-between;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid var(--border-color)} .modal-close-btn{font-size:1.5rem;font-weight:700;line-height:1;color:var(--text-secondary);cursor:pointer;background:none;border:none;padding:0} .app-list-item{display:flex;flex-direction:column;padding:1rem;border:1px solid var(--border-color);border-radius:var(--border-radius-md);margin-bottom:1rem} .app-name{font-size:1.1em;font-weight:600} .app-links a{display:block;color:var(--accent-primary);text-decoration:none;margin-top:0.5rem;word-break:break-all} .app-links a:hover{text-decoration:underline} .app-links span{color:var(--text-secondary)} </style></head><body class="dark-theme"><div class="page-wrapper"><div class="top-bar"><a href="https://t.me/crow187" target="_blank" class="telegram-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 L11 13 L2 9 L22 2 Z M22 2 L15 22 L11 13 L2 9 L22 2 Z" fill="var(--text-heading)"></path></svg></a><h1 class="logo">Pages</h1><button id="theme-toggle">🌞</button></div><div class="container"><div class="card-grid"></div></div></div><div id="toast"></div><div id="appModal"><div class="app-modal-content"><div class="app-modal-header"><h3 id="appModalTitle"></h3><button class="modal-close-btn">×</button></div><div class="app-modal-body" id="appModalBody"></div></div></div><script> const subscriptionPath='${subscriptionPath ? `/${subscriptionPath.replace(/^\//, '')}` : ''}'; let contentHTML=''; if(${showSubscriptionButton}){contentHTML+='<div class="card"><div class="card-title">订阅链接</div><div class="button-grid subscription-grid"><button class="btn" data-clipboard-text="">通用订阅</button></div></div>'} contentHTML+='<div class="card"><div class="card-title">APP 下载</div><div class="button-grid app-download-buttons"><button class="btn" data-platform="android">安卓客户端</button><button class="btn" data-platform="ios">苹果客户端</button><button class="btn" data-platform="windows">Windows客户端</button><button class="btn" data-platform="mac">Mac客户端</button></div></div>'; document.querySelector('.card-grid').innerHTML=contentHTML; const themeToggle=document.getElementById('theme-toggle'); const body=document.body; themeToggle.addEventListener('click',()=>{const isDark=body.classList.contains('dark-theme');const newTheme=isDark?'light':'dark';setTheme(newTheme);localStorage.setItem('theme',newTheme)}); function setTheme(theme){if(theme==='light'){body.classList.remove('dark-theme');body.classList.add('light-theme');themeToggle.textContent='🌙'}else{body.classList.remove('light-theme');body.classList.add('dark-theme');themeToggle.textContent='🌞'}} const savedTheme=localStorage.getItem('theme')||'dark';setTheme(savedTheme); const toast=document.createElement('div');toast.id='toast';document.body.appendChild(toast); let toastTimeout; function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>{toast.classList.remove('show')},2000)} document.body.addEventListener('click',e=>{const subBtn=e.target.closest('.button-grid .btn[data-clipboard-text]');if(subBtn){const textToCopy=subBtn.getAttribute('data-clipboard-text');navigator.clipboard.writeText(textToCopy).then(()=>showToast('复制成功!')).catch(()=>showToast('复制失败!'));return} const appBtn=e.target.closest('.app-download-buttons .btn');if(appBtn){openAppModal(appBtn.dataset.platform);return}}); const subButton=document.querySelector('.button-grid .btn[data-clipboard-text]');if(subButton){const baseUrl=window.location.origin;subButton.setAttribute('data-clipboard-text',baseUrl+subscriptionPath)} const appModal=document.getElementById('appModal');const closeModalBtn=appModal.querySelector('.modal-close-btn'); const downloadData={android:[{name:'Clash-Mi',repo:'KaringX/clashmi',keywords:['android','arm64-v8a.apk']},{name:'Karing',repo:'KaringX/karing',keywords:['apk','universal-release']},{name:'Sing-Box',repo:'SagerNet/sing-box',keywords:['android','universal']},{name:'V2rayNG',repo:'2dust/v2rayNG',keywords:['apk','arm64-v8a']}],ios:[{name:'Karing',fixedUrl:'https://apps.apple.com/us/app/karing/id6472431552?platform=iphone'},{name:'Sing-Box',fixedUrl:'https://apps.apple.com/us/app/sing-box-vt/id6673731168?platform=iphone'},{name:'Shadowrocket',fixedUrl:'https://apps.apple.com/us/app/shadowrocket/id932747118?platform=iphone'}],windows:[{name:'Clash-Mi',repo:'KaringX/clashmi',keywords:['windows','x64.zip']},{name:'Karing',repo:'KaringX/karing',keywords:['exe','x64-setup']},{name:'V2rayN',repo:'2dust/v2rayN',keywords:['windows-64.zip']},{name:'ClashN',repo:'2dust/clashN',keywords:['clashN.zip']}],mac:[{name:'Karing',fixedUrl:'https://apps.apple.com/us/app/karing/id6472431552?platform=mac'},{name:'Sing-Box',fixedUrl:'https://apps.apple.com/us/app/sing-box-vt/id6673731168?platform=mac'}]}; const proxyEnabled=${!!config.proxy.enabled}; function getAcceleratedUrl(url){if(proxyEnabled&&(url.includes('github.com'))){return window.location.origin+'/'+url.replace('://',':/')}return url} async function getLatestReleaseAsset(repo,keywords){try{const response=await fetch(getAcceleratedUrl(\`https://api.github.com/repos/\${repo}/releases/latest\`));if(!response.ok)return null;const data=await response.json();for(const keyword of keywords){const asset=data.assets.find(a=>a.name.toLowerCase().includes(keyword.toLowerCase()));if(asset)return asset.browser_download_url}return null}catch(e){return null}} async function openAppModal(platform){const platformName={android:'安卓',ios:'苹果',windows:'Windows',mac:'Mac'}[platform];appModal.querySelector('#appModalTitle').textContent=\`\${platformName}客户端下载\`;const modalBody=appModal.querySelector('#appModalBody');modalBody.innerHTML='<span>正在获取最新版本...</span>';appModal.style.display='flex';const apps=downloadData[platform];let content='';for(const app of apps){let linksHtml='';if(app.fixedUrl){linksHtml=\`<a href="\${getAcceleratedUrl(app.fixedUrl)}" target="_blank" rel="noopener noreferrer">\${app.fixedUrl.split('/').pop()}</a>\`}else if(app.repo){const url=await getLatestReleaseAsset(app.repo,app.keywords);if(url){linksHtml=\`<a href="\${getAcceleratedUrl(url)}" target="_blank" rel="noopener noreferrer">\${url.split('/').pop()}</a>\`}else{linksHtml='<span>获取失败，请稍后重试。</span>'}} content+=\`<div class="app-list-item"><span class="app-name">\${app.name}</span><div class="app-links">\${linksHtml}</div></div>\`} modalBody.innerHTML=content} closeModalBtn.addEventListener('click',()=>{appModal.style.display='none'});appModal.addEventListener('click',e=>{if(e.target===appModal)appModal.style.display='none'}); </script></body></html>`; return new Response(homePageHTML, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } }) },
    async handleRawSubscriptionRequest(a, b) { try { const c = b.UUID || config.accessKey; const d = normalizeKey(c); const e = a.headers.get(decode(voc.host)) || new URL(a.url).hostname; const f = await this.parseStreamConfig(new URL(a.url), b, e); const g = await this.generateClientConfig(d, e, f); return new Response(g, { headers: { 'Content-Type': 'text/plain; charset=utf-8' }, }) } catch (h) { return new Response(`Error: ${h.message}`, { status: 500 }) } },
    safeBtoa(a) { return btoa(unescape(encodeURIComponent(a))) },
    parseAddressAndPort(a) { const b = a.lastIndexOf(':'); if (b !== -1 && !a.includes(']')) { const c = a.substring(b + 1); if (/^\d+$/.test(c)) { const d = parseInt(c, 10); if (d > 0 && d <= 65535) { return { address: a.substring(0, b), port: d } } } } if (a.includes(']:')) { const e = a.match(/]:(\d+)$/); if (e) { const f = parseInt(e[1], 10); if (f > 0 && f <= 65535) { const g = a.substring(0, a.lastIndexOf(':')); return { address: g, port: f } } } } return { address: a, port: 443 } },
    async fetchAndParseIPs(a) { try { const b = await fetch(a); if (!b.ok) return []; const c = await b.text(); const d = c.split('\n').map(e => e.trim()).filter(e => e && !e.startsWith('#')); if (d.length === 0) return []; const f = [{ name: 'ranking', regex: /\[\d+\/\d+\]\s+([0-9a-fA-F:.]+)\s*（([^）]+)）/, handler: g => ({ address: g[1], name: g[2].trim() }) }, { name: 'ip_port_remark', regex: /^([0-9a-fA-F:.]+):(\d+)(?:#(.+))?/, handler: g => ({ address: g[1], port: g[2], name: g[3] || g[1] }) }, { name: 'domain_remark', regex: /^([a-zA-Z0-9.-]+(?:#| \| )(.+))/, handler: g => { const h = g[1].split(/#| \| /); return { address: h[0], name: h.slice(1).join(' | ').trim() }; } }, { name: 'remark_ip', regex: /^(.+?)\s+([0-9a-fA-F:.]+)$/, handler: g => isValidIP(g[2]) ? { address: g[2], name: g[1].trim() } : null }, { name: 'pure_domain', regex: /^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}\s*$/, handler: g => ({ address: g[0], name: g[0] }) }, { name: 'pure_ipv4', regex: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, handler: g => isValidIP(g[0]) ? { address: g[0], name: g[0] } : null }, { name: 'pure_ipv6', regex: /^[0-9a-fA-F:\[\]]+$/, handler: g => isValidIP(g[0].replace(/[\[\]]/g, '')) ? { address: g[0], name: 'IPv6' } : null },]; const i = []; for (const j of d) { for (const k of f) { const l = j.match(k.regex); if (l) { const m = k.handler(l); if (m) { i.push(m); break; } } } } return i } catch (n) { return [] } },
    async generateClientConfig(a, b, c) { const d = await Promise.all(config.ipListUrls.map(g => this.fetchAndParseIPs(g))); const e = d.flat(); const f = []; const h = c.path.startsWith('/') ? c.path : `/${c.path}`; let i = 1; const j = (k, l, m) => { if (!isValidHostname(k)) return null; const n = k.includes(':') && !k.startsWith('[') ? `[${k}]` : k; return `vless://${a}@${n}:${l}?encryption=none&security=tls&sni=${b}&fp=randomized&type=ws&host=${b}&path=${encodeURIComponent(h)}#${encodeURIComponent(m)}` }; for (const k of config.priorityEndpoints) { const l = k.trim().split(/\s+/); if (l.length < 2) continue; const m = l.pop(); const n = l.join(' '); const o = j(m, '443', n); if (o) f.push(o) } for (const p of e) { let q = p.name; if (p.name === 'IPv6') { q = `IPv6 ~ ${i++}` } const r = j(p.address, p.port || '443', q); if (r) f.push(r) } return this.safeBtoa(f.join('\n')) },
    async resolveHostnameViaDoH(a) { const b = `${decode(voc.doh_url_prefix)}${encodeURIComponent(a)}${decode(voc.doh_url_suffix)}`; try { const c = await fetch(b, { headers: { 'Accept': decode(voc.doh_accept_header) } }); if (!c.ok) return []; const d = await c.json(); return d.Answer ? d.Answer.filter(e => e.type === 1).map(e => e.data) : [] } catch (f) { return [] } },
    async parseStreamConfig(a, b, c) { try { const { pathname: d, searchParams: e } = a; let f = { relayAddr: b.RELAY_ADDR || config.fallbackTarget, path: `/${c}`, altTransport: null, forceRelay: !1 }; let g = d; const h = g.substring(1).split('/')[0]; if (h === c) { const i = normalizeKey(aliasTargetHostname); const j = await this.resolveHostnameViaDoH(i); if (j.length > 0) { f.relayAddr = j[Math.floor(Math.random() * j.length)] } else { f.relayAddr = i } g = g.substring(h.length + 1) || '/' } else { const k = g.match(/^\/((?:g?s5|socks5|g?http)=|((?:socks5?|http):\/?\/?))([^/]+)/i); if (k && k[3]) { const l = k[1] || k[2] || ''; const m = l.toLowerCase().replace(':', '').replace(/\//g, ''); const n = decode(voc.socks5); const o = decode(voc.http); f.altTransport = { protocol: m.includes(o) ? o : n, address: k[3] }; g = g.substring(k[0].length) || '/' } else { const p = g.match(/^\/((?:proxyip(?:\.|_|=)|ip(?:_|=))[^/]+)/i); if (p && p[1]) { const q = p[1]; const r = q.match(/(?:proxyip(?:\.|_|=)|ip(?:_|=))(.+)/i); if (r && r[1] && isValidHostname(r[1])) { f.relayAddr = r[1]; g = g.substring(p[0].length) || '/' } } else { const s = g.substring(1).split('/')[0]; if (isValidHostname(s)) { f.relayAddr = s; g = g.substring(s.length + 1) || '/' } } } } if (g.endsWith('/p')) { f.forceRelay = !0; g = g.slice(0, -2) || '/' } const t = decode(voc.proxyip); if (e.has(t)) { f.relayAddr = e.get(t) } const u = '/nodes'; f.path = (g === '/' || g === '' || g === u) ? `/${c}` : g; if (f.altTransport && f.altTransport.address) { const v = decode(voc.socks5); const w = decode(voc.http); const x = (f.altTransport.protocol === w ? `${w}://` : `${v}://`) + f.altTransport.address; const y = new URL(x); f.altTransport.hostname = y.hostname; f.altTransport.port = parseInt(y.port, 10) || (f.altTransport.protocol === w ? 80 : 1080); f.altTransport.username = y.username ? decodeURIComponent(y.username) : ''; f.altTransport.password = y.password ? decodeURIComponent(y.password) : '' } return f } catch (z) { return null } },
    

    async handleDataStream(ws, request, configData) {
        let isFirstPacket = true;
        let firstPacketPromise = null;
        let remoteSocketWriter = null;
        let remoteSocketReader = null;
        let remoteSocket = null;
        let transmissionQueue = Promise.resolve();
        let payloadSize = 0;

        ws.addEventListener('message', async (event) => {
            if (isFirstPacket) {
                isFirstPacket = false;
                firstPacketPromise = this.processFirstPacket(event.data, ws, configData);
                transmissionQueue = transmissionQueue.then(() => firstPacketPromise).catch(e => {
                    ws.close(1006, 'Connection reset');
                });
                payloadSize += event.data.byteLength;
            } else {
                await firstPacketPromise;
                transmissionQueue = transmissionQueue.then(() => remoteSocketWriter.write(event.data)).catch(e => {
                    ws.close(1006, 'Connection reset');
                });
                payloadSize += event.data.byteLength;
            }
        });

        ws.addEventListener('close', () => {
            if (remoteSocket) try { remoteSocket.close() } catch (e) { }
        });

        this.processFirstPacket = async (data, ws, conf) => {
            const buffer = new Uint8Array(data);
            const version = buffer[0];
            const providedUUID = (arr, i = 0) => [...arr.slice(i, i + 16)].map(b => b.toString(16).padStart(2, '0')).join('').replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');
            const targetUUID = normalizeKey(config.accessKey || conf.UUID);
            if (targetUUID && providedUUID(buffer.slice(1, 17)) !== targetUUID) { return; }

            ws.send(new Uint8Array([version, 0]));

            const portIndex = 18 + buffer[17] + 1;
            const port = new DataView(buffer.buffer, portIndex, 2).getUint16(0);

            if (port === 53) {
                const dnsPayload = buffer.slice(portIndex + 9);
                const dnsRes = await fetch(decode(voc.dns_query), {
                    method: 'POST',
                    headers: { 'content-type': decode(voc.dns_message) },
                    body: dnsPayload
                });
                const dnsResult = await dnsRes.arrayBuffer();
                const lenHeader = new Uint8Array([(dnsResult.byteLength >> 8) & 0xff, dnsResult.byteLength & 0xff]);
                ws.send(await new Blob([lenHeader, dnsResult]).arrayBuffer());
                return;
            }

            const addrTypeIndex = portIndex + 2;
            const addrType = buffer[addrTypeIndex];
            let addrOffset = addrTypeIndex + 1;
            let targetAddress = '';

            switch (addrType) {
                case 1: targetAddress = buffer.slice(addrOffset, addrOffset + 4).join('.'); break;
                case 2: const len = buffer[addrOffset]; addrOffset += 1; targetAddress = new TextDecoder().decode(buffer.slice(addrOffset, addrOffset + len)); break;
                case 3: const ipv6 = []; const v6View = new DataView(buffer.buffer, addrOffset, 16); for (let i = 0; i < 8; i++) ipv6.push(v6View.getUint16(i * 2).toString(16)); targetAddress = ipv6.join(':'); break;
            }

            if (targetAddress.includes('speed.cloudflare.com')) return;

            try {
                remoteSocket = await this.establishConnection(targetAddress, port, addrType, conf);
            } catch (e) { return; }

            remoteSocketWriter = remoteSocket.writable.getWriter();
            remoteSocketReader = remoteSocket.readable.getReader();

            const initialData = buffer.slice(addrOffset + (addrType === 1 ? 4 : (addrType === 2 ? buffer[addrTypeIndex + 1] : 16)));
            if (initialData && initialData.byteLength > 0) {
                await remoteSocketWriter.write(initialData);
            }
            this.pumpBack(ws, remoteSocketReader, transmissionQueue);
        };

        this.pumpBack = async (ws, reader, queue) => {
            try {
                while (true) {
                    await queue;
                    const { done, value } = await reader.read();
                    if (done) break;
                    if (value && value.byteLength > 0) {
                        if (flowConfig.enable) {
                            let offset = 0;
                            const size = flowConfig.chunkSize;
                            while (offset < value.byteLength) {
                                const chunk = value.slice(offset, offset + size);
                                queue = queue.then(() => ws.send(chunk)).catch(() => { });
                                offset += size;
                            }
                        } else {
                            queue = queue.then(() => ws.send(value)).catch(() => { });
                        }
                    }
                    if (done) break;
                }
            } catch (e) { }
            ws.close();
        };
    },


    async establishConnection(host, port, type, conf) {
        if (conf.altTransport) {
            const { protocol, hostname, port: sPort, username, password } = conf.altTransport;
            const proxyConf = { username, password, hostname, port: sPort };
            if (protocol === decode(voc.socks5)) {
                return this.createSocks5Socket(host, port, type, { socks5Info: proxyConf });
            } else {
                return this.createHttpSocket(host, port, { socks5Info: proxyConf });
            }
        }

        try {
            const connectOpts = type === 3 ? { hostname: `[${host}]`, port: port } : { hostname: host, port: port };
            const socket = connect(connectOpts);
            await socket.opened;
            return socket;
        } catch (e) {
            if (conf.relayAddr) {
                const [pHost, pPort] = await this.parseProxyAddress(conf.relayAddr);
                const socket = connect({ hostname: pHost, port: pPort });
                await socket.opened;
                return socket;
            }
            throw e;
        }
    },

    async createSocks5Socket(targetHost, targetPort, addrType, conf) {
        const { username, password, hostname, port } = conf.socks5Info || {};
        const socket = connect({ hostname, port });
        await socket.opened;
        const writer = socket.writable.getWriter();
        const reader = socket.readable.getReader();
        const encoder = new TextEncoder();
        await writer.write(new Uint8Array([5, 2, 0, 2]));
        const authRes = (await reader.read()).value;
        if (authRes[1] === 0x02) {
            const authPayload = new Uint8Array([1, username.length, ...encoder.encode(username), password.length, ...encoder.encode(password)]);
            await writer.write(authPayload);
            const authResult = (await reader.read()).value;
            if (authResult[1] !== 0x00) throw new Error('Auth failed');
        }
        let addrBuffer;
        switch (addrType) {
            case 1: addrBuffer = new Uint8Array([1, ...targetHost.split('.').map(Number)]); break;
            case 2: addrBuffer = new Uint8Array([3, targetHost.length, ...encoder.encode(targetHost)]); break;
            case 3: addrBuffer = new Uint8Array([4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); break; // IPv6 placeholder
        }
        if (addrType !== 3) {
            const req = new Uint8Array([5, 1, 0, ...addrBuffer, targetPort >> 8, targetPort & 0xff]);
            await writer.write(req);
            const res = (await reader.read()).value;
            if (res[1] !== 0x00) throw new Error('S5 Connect failed');
        }
        writer.releaseLock();
        reader.releaseLock();
        return socket;
    },

    async createHttpSocket(targetHost, targetPort, conf) {
        const { username, password, hostname, port } = conf.socks5Info || {};
        const socket = connect({ hostname, port });
        const writer = socket.writable.getWriter();
        let req = `${decode(voc.connect_method)} ${targetHost}:${targetPort} HTTP/1.1\r\n`;
        req += `${decode(voc.host)}: ${targetHost}:${targetPort}\r\n`;
        if (username && password) { req += `${decode(voc.proxy_auth)}: ${decode(voc.basic)}${btoa(username + ':' + password)}\r\n`; }
        req += `${decode(voc.user_agent_h)}: ${decode(voc.win_ua)}\r\n`;
        req += `${decode(voc.proxy_connection)}: ${decode(voc.keep_alive)}\r\n\r\n`;
        await writer.write(new TextEncoder().encode(req));
        writer.releaseLock();
        const reader = socket.readable.getReader();
        let buffer = new Uint8Array(0);
        let connected = false;
        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            const newBuf = new Uint8Array(buffer.length + value.length);
            newBuf.set(buffer);
            newBuf.set(value, buffer.length);
            buffer = newBuf;
            const text = new TextDecoder().decode(buffer);
            if (text.includes('\r\n\r\n')) {
                if (text.startsWith('HTTP/1.1 200') || text.startsWith('HTTP/1.0 200')) {
                    connected = true;
                    const headerEnd = text.indexOf('\r\n\r\n') + 4;
                    if (buffer.length > headerEnd) {
                        const remaining = buffer.slice(headerEnd);
                        const stream = new ReadableStream({ start(controller) { controller.enqueue(remaining); } });
                        const { writable } = new TransformStream();
                        stream.pipeTo(writable);
                    }
                }
                break;
            }
        }
        reader.releaseLock();
        if (!connected) throw new Error('HTTP Connect failed');
        return socket;
    },

    async parseProxyAddress(str) {
        str = (str || '').toLowerCase();
        let host = str, port = 443;
        if (str.includes('.tp')) {
            const match = str.match(/\.tp(\d+)/);
            if (match) port = parseInt(match[1], 10);
        } else if (str.includes(']:')) {
            const parts = str.split(']:');
            host = parts[0] + ']';
            port = parseInt(parts[1], 10) || 443;
        } else if (str.includes(':') && !str.startsWith('[')) {
            const parts = str.split(':');
            if (parts.length === 2) { host = parts[0]; port = parseInt(parts[1], 10); }
        }
        return [host, port];
    }
};
