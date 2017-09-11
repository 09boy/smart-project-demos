const HomePage = () => import('./home');
const AboutPage = () => import('./about');


export default [
	{
		path: '/',
		name: 'home',
		component: HomePage,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutPage,
	},
];