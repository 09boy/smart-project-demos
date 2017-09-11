import { FETCH_HOT_CITIES } from '../constants';

export default {
	state: {
		hotCities: [],
	},

	mutations: {
		[FETCH_HOT_CITIES](state, cities) {
			state.hotCities = cities;
		}
	},

	actions: {
		fetchHotCities({commit}, cities) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit(FETCH_HOT_CITIES, ['北京', '上海', '深圳', '广州', '厦门']);
					resolve();
				}, 2000);
			});
		}
	},

	getters: {
		hotCities: state => state.hotCities,
	},
}