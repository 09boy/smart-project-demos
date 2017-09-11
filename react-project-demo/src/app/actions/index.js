import { FETCH_HOT_CITIES } from '../constants';

const receiveHotCities = (data) => ({
	type: FETCH_HOT_CITIES,
	data,
});

export const getHotCities = () => {
	return (dispatch) => {
		// 这里是方便模拟数据
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				dispatch(receiveHotCities(['北京', '上海', '深圳', '广州', '厦门']));
				resolve();
			}, 2000);
		});
	}
};
