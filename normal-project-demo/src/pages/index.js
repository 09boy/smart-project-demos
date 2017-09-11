import App from './app.js';

const appContainer = document.querySelector('#app');

let nav;
const render = () => {
	nav = App.renderNav(appContainer);
	App.router();
	Backbone.history.stop();
  Backbone.history.start({pushState: true});
};

render();

if (module.hot) {
	module.hot.accept('./app.js', () => {
		appContainer.removeChild(nav);
		render();
	});
};
