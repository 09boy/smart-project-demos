import './style';
import routerConfig from './router.config.js';

export default {
	router: () => {
		for (let key in routerConfig) {
			// 这里一次性同步导入了所以页面，只是实现了拆封代码，并没有实现按需加载，所以你需要侦听路由事件去实现
			new routerConfig[key]();
		}
	},

	renderNav: (target) => {
		const ul = document.createElement('ul');
		ul.className = 'main-nav';
		for (let key in routerConfig) {
			if (key != '' && key != '404') {
				const a = document.createElement('a');
				const li = document.createElement('li');
				a.setAttribute('href', `/${key}`);
				a.innerHTML = key.toUpperCase();
				li.appendChild(a);
				ul.appendChild(li)
			}
		}
		setTimeout(()=>{
			target.appendChild(ul);
		}, 0);
		return ul;
	}
};
