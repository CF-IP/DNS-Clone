const showSubscriptionButton = false;
// 控制首页订阅按钮是否显示。true 为显示，false 为隐藏。
const subscriptionPath = 'd342d11e-d424-4583-b36e-524ab1f0afa4';
// 自定义订阅路径，默认为空，即根路径'/'。如需自定义，请填写'sub'，订阅地址则变为 url/sub

const accessKey = 'd342d11e-d424-4583-b36e-524ab1f0afa4'
// UID明文格式 'd342d11e-d424-4583-b36e-524ab1f0afa4'
// UID数组格式 [100, 51, 52, 50, 100, 49, 49, 101, 45, 100, 52, 50, 52, 45, 52, 53, 56, 51, 45, 98, 51, 54, 101, 45, 53, 50, 52, 97, 98, 49, 102, 48, 97, 102, 97, 52];

const defaultPath = [47, 115, 103, 46, 54, 54, 53, 57, 54, 54, 46, 120, 121, 122];
// 节点里的 path proxyip 明文格式 '/sg.665966.xyz'
// 节点里的 path proxyip 数组格式 [47, 115, 103, 46, 54, 54, 53, 57, 54, 54, 46, 120, 121, 122]
const fallbackTarget = [115, 103, 46, 54, 54, 53, 57, 54, 54, 46, 120, 121, 122];
// 兜底proxyip 明文格式 'sg.665966.xyz'
// 兜底proxyip 数组格式 [115, 103, 46, 54, 54, 53, 57, 54, 54, 46, 120, 121, 122]

const priorityEndpoints = [
	'HK1 www.akzai.store',
	'HK2 hk.pyip.xx.kg',
	'TG：@Crow187 www.wto.org',
	'TG：@Crow187 mfa.gov.ua',
	'TG：@Crow187 openai.com'
];
// DIY节点名称和地址 明文格式 ['TG：@Crow187 www.wto.org', 'TG：@Crow187 mfa.gov.ua', 'TG：@Crow187 openai.com']
// 数组格式 (此项不支持数组编码)

const ipListUrls = [
	'https://github.com/Senflare/Senflare-DNS-IP/raw/refs/heads/main/YXhost.txt',
	[104, 116, 116, 112, 115, 58, 47, 47, 114, 97, 119, 46, 103, 105, 116, 104, 117, 98, 117, 115, 101, 114, 99, 111, 110, 116, 101, 110, 116, 46, 99, 111, 109, 47, 67, 70, 45, 73, 80, 47, 99, 102, 45, 105, 112, 46, 103, 105, 116, 104, 117, 98, 46, 105, 111, 47, 114, 101, 102, 115, 47, 104, 101, 97, 100, 115, 47, 109, 97, 105, 110, 47, 100, 97, 116, 97, 47, 115, 121, 46, 116, 120, 116],
	[104, 116, 116, 112, 115, 58, 47, 47, 114, 97, 119, 46, 103, 105, 116, 104, 117, 98, 117, 115, 101, 114, 99, 111, 110, 116, 101, 110, 116, 46, 99, 111, 109, 47, 67, 70, 45, 73, 80, 47, 99, 102, 45, 105, 112, 46, 103, 105, 116, 104, 117, 98, 46, 105, 111, 47, 114, 101, 102, 115, 47, 104, 101, 97, 100, 115, 47, 109, 97, 105, 110, 47, 100, 97, 116, 97, 47, 112, 114, 111, 120, 121, 46, 116, 120, 116]
];
// 从外部地址获取名称和IP 明文格式 ['https://github.com/CF-IP/cf-ip.github.io/raw/refs/heads/main/data/sy.txt', 'https://github.com/CF-IP/cf-ip.github.io/raw/refs/heads/main/data/proxy.txt']
// 从外部地址获取名称和IP 数组格式 [[104, 116, ...], [104, 116, ...]]

const subscriptionConverter = 'https://sub.1874.eu.org';
// 外部订阅转换 明文格式 'https://sub.1874.eu.org'
// 外部订阅转换 数组格式 [104, 116, 116, 112, 115, 58, 47, 47, 115, 117, 98, 46, 49, 56, 55, 52, 46, 101, 117, 46, 111, 114, 103]

import { connect } from 'cloudflare:sockets';

function decode(bytes) {
	return String.fromCharCode.apply(null, bytes);
}

function normalizeKey(key) {
	if (typeof key === 'string') return key;
	if (Array.isArray(key)) return decode(key);
	return "";
}

const config = {
	accessKey: accessKey,
	defaultPath: normalizeKey(defaultPath),
	fallbackTarget: normalizeKey(fallbackTarget),
	subscriptionConverter: normalizeKey(subscriptionConverter),
	proxy: { enabled: true },
	specialDomains: [
		'dash.cloudflare.com', 'x.com', 'chat.openai.com', 'claude.ai', 'www.perplexity.ai', 'poe.com',
		'copilot.microsoft.com', 'www.midjourney.com', 'dreamstudio.ai', 'ideogram.ai',
		'leonardo.ai', 'openai.com', 'runwayml.com', 'pika.art', 'platform.openai.com',
		'huggingface.co', 'replicate.com', 'suno.ai', 'udio.com', 'gamma.app',
		'elevenlabs.io', 'google.com', 'googleapis.com', 'www.kaggle.com',
		'www.tensorflow.org', 'gemini.google.com', 'aistudio.google.com', 'x.ai'
	],
	ipListUrls: ipListUrls.map(url => normalizeKey(url)),
	priorityEndpoints: priorityEndpoints,
	botSignatures: [[118, 50, 114, 97, 121], [99, 108, 97, 115, 104], [115, 105, 110, 103, 45, 98, 111, 120], [115, 104, 97, 100, 111, 119, 114, 111, 99, 107, 101, 116], [99, 117, 114, 108]],
	homePageHTML: `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><title>Cloudflare Workers</title><style>:root{--primary-color:#38bdf8;--bg-color:#0c0a09;--content-bg:rgba(23,23,23,0.6);--border-color:rgba(255,255,255,0.15);--text-color:#f2f2f2;--text-light:#a3a3a3}*{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';background-color:var(--bg-color);color:var(--text-color);line-height:1.6}.app-container{max-width:800px;margin:0 auto;padding:0 1rem}header{text-align:center;margin:3rem 0 2rem}header h1{font-size:2.25em;color:var(--primary-color);font-weight:700}.card{background-color:var(--content-bg);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:12px;padding:1.5rem;margin-bottom:1.5rem;border:1px solid var(--border-color)}.section-header h2{font-size:1.5em;font-weight:600;margin-bottom:1rem;padding-bottom:.5rem;border-bottom:1px solid var(--border-color)}.btn{display:inline-flex;align-items:center;justify-content:center;font-weight:500;cursor:pointer;background:rgba(56,189,248,0.2);border:1px solid var(--primary-color);color:var(--primary-color);padding:.5em 1em;font-size:1em;border-radius:8px;transition:all .2s ease-in-out;text-decoration:none}.btn:hover{background-color:var(--primary-color);color:#fff}.button-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem}#toast{position:fixed;top:1.5rem;right:1.5rem;background-color:var(--primary-color);color:#fff;padding:.8rem 1.2rem;border-radius:8px;z-index:1000;opacity:0;visibility:hidden;transform:translateY(20px);transition:all .3s ease}#toast.show{opacity:1;visibility:visible;transform:translateY(0)}#appModal{display:none;position:fixed;z-index:10000;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.6);justify-content:center;align-items:center;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);}.app-modal-content{background-color:var(--content-bg);padding:2rem;border:1px solid var(--border-color);border-radius:12px;width:95%;max-width:800px;max-height:90vh;overflow-y:auto;box-shadow:0 5px 15px rgba(0,0,0,0.3)}.app-modal-header{display:flex;justify-content:space-between;align-items:center;padding-bottom:1rem;margin-bottom:1rem;border-bottom:1px solid var(--border-color)}.modal-close-btn{font-size:1.5rem;font-weight:700;line-height:1;color:var(--text-light);cursor:pointer;background:none;border:none;padding:0}.app-list-item{display:flex;flex-direction:column;padding:1rem;border:1px solid var(--border-color);border-radius:8px;margin-bottom:1rem}.app-name{font-size:1.1em;font-weight:600}.app-links a{display:block;color:var(--primary-color);text-decoration:none;margin-top:0.5rem;word-break:break-all}.app-links a:hover{text-decoration:underline}.app-links span{color:var(--text-light)}@media (max-width:768px){header{margin-top:2rem}}</style></head><body><div class="app-container"><header><h1>Cloudflare Vpn</h1></header><div id="content-area"></div></div><div id="toast"></div><div id="appModal"><div class="app-modal-content"><div class="app-modal-header"><h3 id="appModalTitle"></h3><button class="modal-close-btn">×</button></div><div class="app-modal-body" id="appModalBody"></div></div></div></body></html>`
};

const str = {
	ua: [117, 115, 101, 114, 45, 97, 103, 101, 110, 116],
	upgrade: [85, 112, 103, 114, 97, 100, 101],
	websocket: [119, 101, 98, 115, 111, 99, 107, 101, 116],
	sec_ws_protocol: [115, 101, 99, 45, 119, 101, 98, 115, 111, 99, 107, 101, 116, 45, 112, 114, 111, 116, 111, 99, 111, 108],
	dns_query: [104, 116, 116, 112, 115, 58, 47, 47, 100, 110, 115, 46, 103, 111, 111, 103, 108, 101, 47, 100, 110, 115, 45, 113, 117, 101, 114, 121],
	content_type: [99, 111, 110, 116, 101, 110, 116, 45, 116, 121, 112, 101],
	dns_message: [97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 100, 110, 115, 45, 109, 101, 115, 115, 97, 103, 101],
	host: [72, 111, 115, 116],
	proxy_auth: [80, 114, 111, 120, 121, 45, 65, 117, 116, 104, 111, 114, 105, 122, 97, 116, 105, 111, 110],
	basic: [66, 97, 115, 105, 99, 32],
	proxy_connection: [80, 114, 111, 120, 121, 45, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110],
	keep_alive: [75, 101, 101, 112, 45, 65, 108, 105, 118, 101],
	connection: [67, 111, 110, 110, 101, 99, 116, 105, 111, 110],
};

const consts = {
	KEEPALIVE_INTERVAL: 15000,
	STALL_TIMEOUT: 8000,
	MAX_STALL_COUNT: 12,
	MAX_RECONNECT_ATTEMPTS: 24,
	WS_OPEN_STATE: 1,
};

function isValidIPv4(ip) {
    const parts = ip.split('.');
    if (parts.length !== 4) return false;
    return parts.every(part => {
        const num = parseInt(part, 10);
        return !isNaN(num) && num >= 0 && num <= 255;
    });
}

function isValidIP(address) {
    if (isValidIPv4(address)) return true;
    try {
        const url = new URL(`http://[${address}]`);
        return url.hostname === `[${address}]`;
    } catch (e) {
        return false;
    }
}

function isValidHostname(hostname) {
	if (typeof hostname !== 'string' || hostname.length > 253) return false;
	if (hostname.endsWith('.')) hostname = hostname.slice(0, -1);
	return /^([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,63}$/.test(hostname) || isValidIP(hostname);
}

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const upgradeHeader = request.headers.get(decode(str.upgrade));

		if (upgradeHeader && upgradeHeader.toLowerCase() === decode(str.websocket)) {
			const proxySettings = this.parseProxySettings(url, env);
			return this.handleDataStream(request, env, proxySettings, ctx);
		}
		
		if (url.pathname.startsWith('/https:/') || url.pathname.startsWith('/http:/')) {
			return this.handleProxyRequest(request);
		}

		const userAgent = (request.headers.get(decode(str.ua)) || '').toLowerCase();
		const botUARegex = new RegExp(config.botSignatures.map(decode).join('|'), 'i');
		const isSubscriptionClient = botUARegex.test(userAgent);
		
		const subPath = subscriptionPath ? `/${subscriptionPath.replace(/^\//, '')}` : '/';

		if (url.pathname === '/nodes') {
			return this.handleRawSubscriptionRequest(request, env);
		}

		if (isSubscriptionClient && url.pathname === subPath) {
			const rawSubUrl = `${url.origin}/nodes`;
			const converterUrl = `${config.subscriptionConverter}/${rawSubUrl}`;
			const subResponse = await fetch(converterUrl, { headers: request.headers });
			return new Response(subResponse.body, subResponse);
		}

		return this.serveHomePage(url);
	},

	async handleProxyRequest(request) {
		if (!config.proxy.enabled) {
			return new Response('代理功能未开启', { status: 403 });
		}
		const url = new URL(request.url);
		const targetUrlString = url.pathname.substring(1).replace(':/', '://');
		try {
			const targetUrl = new URL(targetUrlString);
			const allowedDomains = ['github.com', 'objects.githubusercontent.com'];
			if (!allowedDomains.some(domain => targetUrl.hostname.endsWith(domain))) {
				return new Response('不支持的代理域名', { status: 400 });
			}
			const proxyHeaders = new Headers(request.headers);
			proxyHeaders.set('Host', targetUrl.hostname);
			const backendResponse = await fetch(targetUrl.toString(), {
				method: request.method,
				headers: proxyHeaders,
				body: request.body,
			});
			const responseHeaders = new Headers(backendResponse.headers);
			responseHeaders.set('Access-Control-Allow-Origin', '*');
			return new Response(backendResponse.body, {
				status: backendResponse.status,
				statusText: backendResponse.statusText,
				headers: responseHeaders,
			});
		} catch (e) {
			return new Response('无效的目标URL', { status: 400 });
		}
	},

	serveHomePage(url) {
		let html = config.homePageHTML;
		let contentToInject = '';

		if (showSubscriptionButton) {
			contentToInject += `<div class="card"><div class="section-header"><h2>订阅链接</h2></div><div class="button-grid"><button class="btn" data-clipboard-text="">通用订阅</button></div></div>`;
		}
		
		contentToInject += `<div class="card"><div class="section-header"><h2>APP 下载</h2></div><div class="button-grid app-download-buttons"><button class="btn" data-platform="android">安卓客户端</button><button class="btn" data-platform="ios">苹果客户端</button><button class="btn" data-platform="windows">Windows客户端</button><button class="btn" data-platform="mac">Mac客户端</button></div></div>`;
		
		html = html.replace('<div id="content-area"></div>', contentToInject);

		const subPath = subscriptionPath ? `/${subscriptionPath.replace(/^\//, '')}` : '';
		const proxyEnabled = config.proxy.enabled;

		const injectionScript = `
		<script>
			document.addEventListener('DOMContentLoaded', () => {
				const toast = document.createElement('div');
				toast.id = 'toast';
				document.body.appendChild(toast);
				let toastTimeout;
				function showToast(message) {
					toast.textContent = message;
					toast.classList.add('show');
					clearTimeout(toastTimeout);
					toastTimeout = setTimeout(() => { toast.classList.remove('show') }, 2000);
				}

				document.body.addEventListener('click', e => {
					const subBtn = e.target.closest('.button-grid .btn[data-clipboard-text]');
					if (subBtn) {
						const textToCopy = subBtn.getAttribute('data-clipboard-text');
						navigator.clipboard.writeText(textToCopy).then(() => { showToast('复制成功!') }).catch(() => { showToast('复制失败!') });
						return; 
					}
					
					const appBtn = e.target.closest('.app-download-buttons .btn');
					if (appBtn) {
						openAppModal(appBtn.dataset.platform);
						return; 
					}
				});

				const subButton = document.querySelector('.button-grid .btn[data-clipboard-text]');
				if (subButton) {
					const baseUrl = window.location.origin;
					subButton.setAttribute('data-clipboard-text', baseUrl + '${subPath}');
				}
				
				const appModal = document.getElementById('appModal');
				const closeModalBtn = appModal.querySelector('.modal-close-btn');
				const downloadData = {
					android: [{ name: 'Clash-Mi', repo: 'KaringX/clashmi', keywords: ['android', 'arm64-v8a.apk'] }, { name: 'Karing', repo: 'KaringX/karing', keywords: ['apk', 'universal-release'] }, { name: 'Sing-Box', repo: 'SagerNet/sing-box', keywords: ['android', 'universal'] }, { name: 'V2rayNG', repo: '2dust/v2rayNG', keywords: ['apk', 'arm64-v8a'] }],
					ios: [{ name: 'Karing', fixedUrl: 'https://apps.apple.com/us/app/karing/id6472431552?platform=iphone' }, { name: 'Sing-Box', fixedUrl: 'https://apps.apple.com/us/app/sing-box-vt/id6673731168?platform=iphone' }, { name: 'Shadowrocket', fixedUrl: 'https://apps.apple.com/us/app/shadowrocket/id932747118?platform=iphone' }],
					windows: [{ name: 'Clash-Mi', repo: 'KaringX/clashmi', keywords: ['windows', 'x64.zip'] }, { name: 'Karing', repo: 'KaringX/karing', keywords: ['exe', 'x64-setup'] }, { name: 'V2rayN', repo: '2dust/v2rayN', keywords: ['v2rayN-Core.zip'] }, { name: 'ClashN', repo: '2dust/clashN', keywords: ['clashN.zip'] }],
					mac: [{ name: 'Karing', fixedUrl: 'https://apps.apple.com/us/app/karing/id6472431552?platform=mac' }, { name: 'Sing-Box', fixedUrl: 'https://apps.apple.com/us/app/sing-box-vt/id6673731168' }]
				};

				function getAcceleratedUrl(url) {
					const proxyEnabled = ${proxyEnabled};
					if (proxyEnabled && (url.includes('github.com'))) {
						return window.location.origin + '/' + url.replace('://', ':/');
					}
					return url;
				}

				async function getLatestReleaseAsset(repo, keywords) {
					try {
						const response = await fetch(getAcceleratedUrl(\`https://api.github.com/repos/\${repo}/releases/latest\`));
						if (!response.ok) return null;
						const data = await response.json();
						for (const keyword of keywords) {
							const asset = data.assets.find(a => a.name.toLowerCase().includes(keyword.toLowerCase()));
							if (asset) return asset.browser_download_url;
						}
						return null;
					} catch (e) {
						return null;
					}
				}

				async function openAppModal(platform) {
					const platformName = { android: '安卓', ios: '苹果', windows: 'Windows', mac: 'Mac' }[platform];
					appModal.querySelector('#appModalTitle').textContent = \`\${platformName} 客户端下载\`;
					const modalBody = appModal.querySelector('#appModalBody');
					modalBody.innerHTML = '<span>正在获取最新版本...</span>';
					appModal.style.display = 'flex';
					const apps = downloadData[platform];
					let content = '';
					for (const app of apps) {
						let linksHtml = '';
						if (app.fixedUrl) {
							linksHtml = \`<a href="\${getAcceleratedUrl(app.fixedUrl)}" target="_blank" rel="noopener noreferrer">\${app.fixedUrl.split('/').pop()}</a>\`;
						} else if (app.repo) {
							const url = await getLatestReleaseAsset(app.repo, app.keywords);
							if (url) {
								linksHtml = \`<a href="\${getAcceleratedUrl(url)}" target="_blank" rel="noopener noreferrer">\${url.split('/').pop()}</a>\`;
							} else {
								linksHtml = '<span>获取失败，请稍后重试。</span>';
							}
						}
						content += \`<div class="app-list-item"><span class="app-name">\${app.name}</span><div class="app-links">\${linksHtml}</div></div>\`;
					}
					modalBody.innerHTML = content;
				}
				
				closeModalBtn.addEventListener('click', () => { appModal.style.display = 'none'; });
				appModal.addEventListener('click', (e) => { if (e.target === appModal) appModal.style.display = 'none'; });
			});
		</script>
		`;
		html = html.replace('</body></html>', `${injectionScript}</body></html>`);
		
		return new Response(html, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
	},

	async handleRawSubscriptionRequest(request, env) {
		try {
			const rawVlessKey = env.UUID || config.accessKey;
			const vlessKey = normalizeKey(rawVlessKey);
			const hostName = request.headers.get(decode(str.host)) || new URL(request.url).hostname;
			const proxySettings = this.parseProxySettings(new URL(request.url), env);

			const base64Content = await this.generateClientConfig(vlessKey, hostName, proxySettings);
			return new Response(base64Content, {
				headers: { 'Content-Type': 'text/plain; charset=utf-8' },
			});
		} catch (error) {
			return new Response(`Error: ${error.message}`, { status: 500 });
		}
	},

	safeBtoa(str) {
		return btoa(unescape(encodeURIComponent(str)));
	},

	async fetchAndParseIPs(url) {
		try {
			const response = await fetch(url);
			if (!response.ok) return [];
			const text = await response.text();
	
			const lines = text.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));
			if (lines.length === 0) return [];
	
			const patterns = [
				{ name: 'ranking', regex: /\[\d+\/\d+\]\s+([0-9a-fA-F:.]+)\s*（([^）]+)）/, handler: (match) => ({ address: match[1], name: match[2].trim() }) },
				{ name: 'ip_port_remark', regex: /^([0-9a-fA-F:.]+):(\d+)(?:#(.+))?/, handler: (match) => ({ address: match[1], port: match[2], name: match[3] || match[1] }) },
				{ name: 'domain_remark_pipe', regex: /^([a-zA-Z0-9.-]+(?:#| \| )(.+))/, handler: (match) => { const parts = match[1].split(/#| \| /); return { address: parts[0], name: parts.slice(1).join(' | ').trim() }; } },
				{ name: 'remark_ip', regex: /^(.+?)\s+([0-9a-fA-F:.]+)$/, handler: (match) => isValidIP(match[2]) ? { address: match[2], name: match[1].trim() } : null },
				{ name: 'pure_domain', regex: /^(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}\s*$/, handler: (match) => ({ address: match[0], name: match[0] }) },
				{ name: 'pure_ipv4', regex: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, handler: (match) => isValidIP(match[0]) ? { address: match[0], name: match[0] } : null },
				{ name: 'pure_ipv6', regex: /^[0-9a-fA-F:\[\]]+$/, handler: (match) => isValidIP(match[0].replace(/[\[\]]/g, '')) ? { address: match[0], name: 'IPv6' } : null },
			];
	
			const results = [];
			for (const line of lines) {
				for (const pattern of patterns) {
					const match = line.match(pattern.regex);
					if (match) {
						const result = pattern.handler(match);
						if (result) {
							results.push(result);
							break;
						}
					}
				}
			}
			return results;
	
		} catch (error) {
			return [];
		}
	},
	
	async generateClientConfig(auth, hostName, proxySettings) {
		const ipLists = await Promise.all(config.ipListUrls.map(url => this.fetchAndParseIPs(url)));
		const ipList = ipLists.flat();
		const links = [];
		const path = proxySettings.path;
		let ipv6Counter = 1;
	
		const generateNode = (address, port, remark) => {
			if (!isValidHostname(address)) return null;
			const finalAddress = address.includes(':') && !address.startsWith('[') ? `[${address}]` : address;
			return `vless://${auth}@${finalAddress}:${port}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=${encodeURIComponent(path)}#${encodeURIComponent(remark)}`;
		};
	
		for (const endpoint of config.priorityEndpoints) {
			const parts = endpoint.trim().split(/\s+/);
			if (parts.length < 2) continue;
			const address = parts.pop();
			const remark = parts.join(' ');
			const node = generateNode(address, '443', remark);
			if(node) links.push(node);
		}
	
		for (const item of ipList) {
			let finalRemark = item.name;
			if (item.name === 'IPv6') {
				finalRemark = `IPv6 ~ ${ipv6Counter++}`;
			}
			const node = generateNode(item.address, item.port || '443', finalRemark);
			if(node) links.push(node);
		}
	
		return this.safeBtoa(links.join('\n'));
	},

	parseProxySettings(url, env) {
		const { pathname, searchParams } = url;
		let settings = {
			proxyIP: env.PROXYIP || config.fallbackTarget,
			path: config.defaultPath,
			socks5: null,
		};
		let path = pathname;

		const socksMatch = path.match(/^\/((?:g?s5|socks5|g?http)=|((?:socks5?|http):\/?\/?))([^/]+)/i);
		if (socksMatch) {
			const typeRaw = socksMatch[1] || socksMatch[2];
			const type = typeRaw.toLowerCase().replace(':', '').replace(/\//g, '');
			settings.socks5 = { protocol: type.includes('http') ? 'http' : 'socks5', address: socksMatch[3] };
			path = path.substring(socksMatch[0].length) || '/';
		} else {
			const proxyMatch = path.match(/^\/((?:proxyip(?:\.|_|=)|ip(?:_|=))[^/]+)/i);
			if (proxyMatch) {
				const proxyStr = proxyMatch[1];
				const match = proxyStr.match(/(?:proxyip(?:\.|_|=)|ip(?:_|=))(.+)/i);
				if (match && isValidHostname(match[1])) {
					settings.proxyIP = match[1];
					path = path.substring(proxyMatch[0].length) || '/';
				}
			} else {
				const potentialProxyIP = path.substring(1).split('/')[0];
				if (isValidHostname(potentialProxyIP)) {
					settings.proxyIP = potentialProxyIP;
					path = path.substring(potentialProxyIP.length + 1) || '/';
				}
			}
		}

		if (searchParams.has('proxyip')) {
			settings.proxyIP = searchParams.get('proxyip');
		}

		settings.path = (path === '/' || path === '' || path === '/nodes') ? config.defaultPath : path;

		if (settings.socks5 && settings.socks5.address) {
			try {
				const socksUrlStr = (settings.socks5.protocol === 'http' ? 'http://' : 'socks5://') + settings.socks5.address;
				const socksUrl = new URL(socksUrlStr);
				settings.socks5.hostname = socksUrl.hostname;
				settings.socks5.port = parseInt(socksUrl.port, 10) || (settings.socks5.protocol === 'http' ? 80 : 1080);
				settings.socks5.username = socksUrl.username ? decodeURIComponent(socksUrl.username) : '';
				settings.socks5.password = socksUrl.password ? decodeURIComponent(socksUrl.password) : '';
			} catch (err) {
				settings.socks5 = null;
			}
		}

		return settings;
	},

	async handleDataStream(request, env, proxySettings, ctx) {
		const webSocketPair = new WebSocketPair();
		const [client, server] = Object.values(webSocketPair);
		server.accept();

		let connectionState = {
			remoteSocket: null,
			writer: null,
			reader: null,
			targetInfo: null,
			isFirstMsg: true,
			bytesReceived: 0,
			stallCount: 0,
			reconnectCount: 0,
			lastDataTimestamp: Date.now(),
			udpWrite: null,
			isDns: false,
			timers: {},
			dataBuffer: [],
			earlyData: this.processEarlyData(request.headers.get(decode(str.sec_ws_protocol)) || '')
		};

		server.addEventListener('message', async (event) => {
			try {
				if (connectionState.isFirstMsg) {
					connectionState.isFirstMsg = false;
					let firstChunk = event.data;
					if (connectionState.earlyData) {
						const combined = new Uint8Array(connectionState.earlyData.length + firstChunk.byteLength);
						combined.set(connectionState.earlyData);
						combined.set(new Uint8Array(firstChunk), connectionState.earlyData.length);
						firstChunk = combined.buffer;
					}

					const bytes = new Uint8Array(firstChunk);
					if (bytes[0] !== 0x00) {
						throw new Error('Unsupported protocol');
					}

					const rawVlessKey = env.UUID || config.accessKey;
					const vlessKey = normalizeKey(rawVlessKey);
					await this.handleVlessHandshake(firstChunk, server, connectionState, vlessKey, proxySettings, ctx);

					if (!connectionState.isDns) {
						this.startTimers(server, connectionState, proxySettings, ctx);
						this.readLoop(server, connectionState, proxySettings, ctx);
					}
				} else {
					connectionState.lastDataTimestamp = Date.now();
					if (connectionState.isDns && connectionState.udpWrite) {
						await connectionState.udpWrite(event.data);
					} else if (connectionState.writer) {
						await connectionState.writer.write(event.data);
					} else {
						connectionState.dataBuffer.push(event.data);
					}
				}
			} catch (err) {
				this.cleanup(connectionState);
				server.close(1006, 'Connection abnormal');
			}
		});

		server.addEventListener('close', () => this.cleanup(connectionState));
		server.addEventListener('error', () => this.cleanup(connectionState));

		return new Response(null, { status: 101, webSocket: client });
	},

	async handleVlessHandshake(data, webSocket, state, vlessKey, proxySettings, ctx) {
		const bytes = new Uint8Array(data);
		if (bytes.length < 24) throw new Error('Invalid VLESS header');

		const version = bytes.slice(0, 1);
		const expectedUUID = normalizeKey(vlessKey).replace(/-/g, "");
		const receivedUUID = Array.from(bytes.slice(1, 17)).map(b => b.toString(16).padStart(2, '0')).join('');
		if (receivedUUID !== expectedUUID) throw new Error('Authentication failed');

		webSocket.send(new Uint8Array([version[0], 0]));

		const optLen = bytes[17];
		const command = bytes[18 + optLen];
		const isUDP = command === 2;

		const portOffset = 18 + optLen + 1;
		const port = (bytes[portOffset] << 8) | bytes[portOffset + 1];

		const addrOffset = portOffset + 2;
		const addrType = bytes[addrOffset];
		const { host, endOffset } = this.parseVlessAddress(bytes, addrOffset + 1, addrType);
		const payload = bytes.slice(endOffset);

		state.targetInfo = { host, port, isUDP };

		if (isUDP) {
			if (port === 53) {
				state.isDns = true;
				const { write } = await this.handleUdpOutbound(webSocket, new Uint8Array([version[0], 0]));
				state.udpWrite = write;
				if (payload.length) await state.udpWrite(payload);
				return;
			} else {
				throw new Error('UDP proxy only enabled for DNS port 53');
			}
		}

		const sock = await this.createOriginConnection(host, port, proxySettings, ctx);
		state.remoteSocket = sock;
		state.writer = sock.writable.getWriter();
		state.reader = sock.readable.getReader();
		if (payload.length) await state.writer.write(payload);
	},

	parseVlessAddress(bytes, offset, addrType) {
		let host, endOffset;
		switch (addrType) {
			case 1:
				endOffset = offset + 4;
				host = Array.from(bytes.slice(offset, endOffset)).join('.');
				break;
			case 2:
				const len = bytes[offset];
				endOffset = offset + 1 + len;
				host = new TextDecoder().decode(bytes.slice(offset + 1, endOffset));
				break;
			case 3:
				endOffset = offset + 16;
				const ipv6 = [];
				for (let i = 0; i < 8; i++) {
					ipv6.push(((bytes[offset + i * 2] << 8) | bytes[offset + i * 2 + 1]).toString(16));
				}
				host = `[${ipv6.join(':')}]`;
				break;
			default:
				throw new Error(`Invalid VLESS address type: ${addrType}`);
		}
		return { host, endOffset };
	},

	parseSocks5Address(bytes) {
		const addrType = bytes[1];
		let host, port, offset = 2;
		switch (addrType) {
			case 1:
				host = Array.from(bytes.slice(offset, offset + 4)).join('.');
				offset += 4;
				break;
			case 3:
				const len = bytes[offset];
				offset += 1;
				host = new TextDecoder().decode(bytes.slice(offset, offset + len));
				offset += len;
				break;
			case 4:
				const ipv6Bytes = bytes.slice(offset, offset + 16);
				const ipv6 = [];
				for (let i = 0; i < 8; i++) {
					ipv6.push(((ipv6Bytes[i * 2] << 8) | ipv6Bytes[i * 2 + 1]).toString(16));
				}
				host = `[${ipv6.join(':')}]`;
				offset += 16;
				break;
			default:
				throw new Error(`Invalid SOCKS5 address type: ${addrType}`);
		}
		port = (bytes[offset] << 8) | bytes[offset + 1];
		const payloadOffset = offset + 2;
		return { host, port, payloadOffset };
	},

	async createOriginConnection(host, port, proxySettings, ctx) {
		const isSpecial = config.specialDomains.some(domain => host === domain || host.endsWith('.' + domain));
	
		const fallbackConnect = async () => {
			if (proxySettings.socks5) {
				if (proxySettings.socks5.protocol === 'http') {
					return this.httpConnect(host, port, proxySettings.socks5);
				}
				return this.socks5Connect(host, port, proxySettings.socks5);
			}
			const proxyIP = isSpecial ? config.fallbackTarget : proxySettings.proxyIP;
			const proxySocket = connect({ hostname: proxyIP, port });
			await proxySocket.opened;
			return proxySocket;
		};
	
		if (isSpecial) {
			const cache = caches.default;
			const cacheKey = new Request(`https://${host}:${port}`, { method: 'GET' });
			const cacheResult = await cache.match(cacheKey);
	
			if (cacheResult) {
				return fallbackConnect();
			}
		}
	
		try {
			const directSocket = connect({ hostname: host, port });
			await directSocket.opened;
			return directSocket;
		} catch (err) {
			if (isSpecial) {
				const cacheKey = new Request(`https://${host}:${port}`, { method: 'GET' });
				const cacheResponse = new Response('failed', { headers: { 'Cache-Control': 'max-age=300' } });
				ctx.waitUntil(caches.default.put(cacheKey, cacheResponse));
			}
			try {
				return await fallbackConnect();
			} catch (finalErr) {
				throw new Error('Failed to connect to origin and fallback proxy');
			}
		}
	},	

	async readLoop(webSocket, state, proxySettings, ctx) {
		try {
			while (true) {
				const { done, value } = await state.reader.read();
				if (value) {
					state.bytesReceived += value.length;
					state.lastDataTimestamp = Date.now();
					state.stallCount = 0;
					state.reconnectCount = 0;
					if (webSocket.readyState === consts.WS_OPEN_STATE) {
						webSocket.send(value);
						while (state.dataBuffer.length > 0 && webSocket.readyState === consts.WS_OPEN_STATE) {
							webSocket.send(state.dataBuffer.shift());
						}
					} else {
						state.dataBuffer.push(value);
					}
				}
				if (done) {
					await this.reconnect(webSocket, state, proxySettings, ctx);
					break;
				}
			}
		} catch (err) {
			await this.reconnect(webSocket, state, proxySettings, ctx);
		}
	},

	async reconnect(webSocket, state, proxySettings, ctx) {
		if (!state.targetInfo || webSocket.readyState !== consts.WS_OPEN_STATE || state.reconnectCount >= consts.MAX_RECONNECT_ATTEMPTS) {
			this.cleanup(state);
			webSocket.close(1011, 'Reconnection failed');
			return;
		}
		state.reconnectCount++;
		try {
			this.cleanupSocket(state);
			await new Promise(resolve => setTimeout(resolve, 30 * Math.pow(2, state.reconnectCount)));
			const sock = await this.createOriginConnection(state.targetInfo.host, state.targetInfo.port, proxySettings, ctx);
			state.remoteSocket = sock;
			state.writer = sock.writable.getWriter();
			state.reader = sock.readable.getReader();
			state.lastDataTimestamp = Date.now();
			state.stallCount = 0;
			while (state.dataBuffer.length > 0 && webSocket.readyState === consts.WS_OPEN_STATE) {
				await state.writer.write(state.dataBuffer.shift());
			}
			this.readLoop(webSocket, state, proxySettings, ctx);
		} catch (err) {
			setTimeout(() => this.reconnect(webSocket, state, proxySettings, ctx), 1000);
		}
	},

	startTimers(webSocket, state, proxySettings, ctx) {
		state.timers.keepalive = setInterval(async () => {
			if (Date.now() - state.lastDataTimestamp > consts.KEEPALIVE_INTERVAL) {
				try {
					if (state.writer) {
						await state.writer.write(new Uint8Array(0));
						state.lastDataTimestamp = Date.now();
					}
				} catch (e) {
					await this.reconnect(webSocket, state, proxySettings, ctx);
				}
			}
		}, consts.KEEPALIVE_INTERVAL / 3);

		state.timers.health = setInterval(() => {
			if (state.bytesReceived > 0 && Date.now() - state.lastDataTimestamp > consts.STALL_TIMEOUT) {
				state.stallCount++;
				if (state.stallCount >= consts.MAX_STALL_COUNT) {
					this.reconnect(webSocket, state, proxySettings, ctx);
				}
			}
		}, consts.STALL_TIMEOUT / 2);
	},

	cleanupSocket(state) {
		try { state.writer?.releaseLock(); } catch (e) { }
		try { state.reader?.releaseLock(); } catch (e) { }
		try { state.remoteSocket?.close(); } catch (e) { }
	},

	cleanup(state) {
		Object.values(state.timers).forEach(clearInterval);
		this.cleanupSocket(state);
	},

	processEarlyData(header) {
		if (!header) return null;
		try {
			const decoded = atob(header.replace(/-/g, "+").replace(/_/g, "/"));
			return Uint8Array.from(decoded, c => c.charCodeAt(0));
		} catch (e) {
			return null;
		}
	},

	async handleUdpOutbound(webSocket, responseHeader) {
		let isHeaderSent = false;
		const transformStream = new TransformStream({
			transform(chunk, controller) {
				for (let index = 0; index < chunk.byteLength;) {
					const length = new DataView(chunk.slice(index, index + 2)).getUint16(0);
					const data = new Uint8Array(chunk.slice(index + 2, index + 2 + length));
					index += 2 + length;
					controller.enqueue(data);
				}
			}
		});

		transformStream.readable.pipeTo(new WritableStream({
			async write(chunk) {
				const resp = await fetch(decode(str.dns_query), {
					method: 'POST',
					headers: { [decode(str.content_type)]: decode(str.dns_message) },
					body: chunk,
				});
				const dnsResult = await resp.arrayBuffer();
				const resultSize = dnsResult.byteLength;
				const sizeBuffer = new Uint8Array([(resultSize >> 8) & 0xff, resultSize & 0xff]);

				if (webSocket.readyState === consts.WS_OPEN_STATE) {
					const dataToSend = [];
					if (!isHeaderSent) {
						dataToSend.push(responseHeader);
						isHeaderSent = true;
					}
					dataToSend.push(sizeBuffer, dnsResult);
					const blob = await new Blob(dataToSend).arrayBuffer();
					webSocket.send(blob);
				}
			}
		})).catch(() => { });

		const writer = transformStream.writable.getWriter();
		return { write: (chunk) => writer.write(chunk) };
	},

	async httpConnect(targetHost, targetPort, proxy) {
		const sock = connect({ hostname: proxy.hostname, port: proxy.port });
		await sock.opened;
		const auth = proxy.username && proxy.password ? `${decode(str.proxy_auth)}: ${decode(str.basic)}${btoa(`${proxy.username}:${proxy.password}`)}\r\n` : '';
		const request = `CONNECT ${targetHost}:${targetPort} HTTP/1.1\r\n` +
			`${decode(str.host)}: ${targetHost}:${targetPort}\r\n` + auth +
			`${decode(str.ua)}: Mozilla/5.0\r\n` +
			`${decode(str.proxy_connection)}: ${decode(str.keep_alive)}\r\n` +
			`${decode(str.connection)}: ${decode(str.keep_alive)}\r\n\r\n`;

		const writer = sock.writable.getWriter();
		await writer.write(new TextEncoder().encode(request));
		writer.releaseLock();

		const reader = sock.readable.getReader();
		let buffer = new Uint8Array(0);
		while (true) {
			const { value, done } = await reader.read();
			if (done) throw new Error('HTTP proxy connection closed prematurely');
			const newBuffer = new Uint8Array(buffer.length + value.length);
			newBuffer.set(buffer);
			newBuffer.set(value, buffer.length);
			buffer = newBuffer;
			const responseText = new TextDecoder().decode(buffer);
			if (responseText.includes('\r\n\r\n')) {
				if (!responseText.startsWith('HTTP/1.1 200') && !responseText.startsWith('HTTP/1.0 200')) {
					throw new Error(`HTTP proxy connection failed: ${responseText.split('\r\n')[0]}`);
				}
				break;
			}
		}
		reader.releaseLock();
		return sock;
	},

	async socks5Connect(targetHost, targetPort, proxy) {
		const sock = connect({ hostname: proxy.hostname, port: proxy.port });
		await sock.opened;
		const writer = sock.writable.getWriter();
		const reader = sock.readable.getReader();

		const authMethods = proxy.username ? new Uint8Array([5, 2, 0, 2]) : new Uint8Array([5, 1, 0]);
		await writer.write(authMethods);

		const authMethodResponse = await reader.read();
		if (authMethodResponse.done) throw new Error('SOCKS5 auth failed');

		if (authMethodResponse.value[1] === 2 && proxy.username) {
			const user = new TextEncoder().encode(proxy.username);
			const pass = new TextEncoder().encode(proxy.password);
			await writer.write(new Uint8Array([1, user.length, ...user, pass.length, ...pass]));
			const authResult = await reader.read();
			if (authResult.done || authResult.value[1] !== 0) throw new Error('SOCKS5 user/pass auth failed');
		} else if (authMethodResponse.value[1] !== 0) {
			throw new Error('SOCKS5 no acceptable auth method');
		}



		const domain = new TextEncoder().encode(targetHost);
		await writer.write(new Uint8Array([5, 1, 0, 3, domain.length, ...domain, targetPort >> 8, targetPort & 0xff]));
		const connectResult = await reader.read();
		if (connectResult.done || connectResult.value[1] !== 0) throw new Error('SOCKS5 connection to target failed');

		writer.releaseLock();
		reader.releaseLock();
		return sock;
	}
};
