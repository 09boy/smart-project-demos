// import HomePage from './home';
// import AboutPage from './about';
// import WorkPage from './working';
// import NotFountPage from './notFound';

// smart 无法感知你用哪些第三方类库，所以没有办法动态拆封代码， 用下面方式去创建
// 然后通过侦听路由实现按需加载
const HomePage = () => {
	require.ensure([], () => {
		const Page = require('./home').default;
		new Page();
		Backbone.history.loadUrl(); 
	});
};

const AboutPage = () => {
	import('./about').then(Page => {
		new Page.default();
		Backbone.history.loadUrl(); // 
	});
};

const WorkPage = () => {
	import('./working').then(Page => {
		new Page.default();
		Backbone.history.loadUrl(); // 
	});
};

const NotFountPage = () => {
	import('./notFound').then(Page => {
		new Page.default();
		Backbone.history.loadUrl(); //
	});
};

export default {
	'': HomePage,
	'home': HomePage,
	'about': AboutPage,
	'work': WorkPage,
	'404': NotFountPage,
};
