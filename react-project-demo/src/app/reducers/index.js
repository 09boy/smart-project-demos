import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import common from './common';
import home from '../../pages/home/redux/reducer';
import about from '../../pages/about/redux/reducer';

const rootReducer = combineReducers({
	home,
	about,
	common,
  routing: routerReducer,
});

export default rootReducer;
