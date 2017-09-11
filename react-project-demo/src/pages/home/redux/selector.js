import { createSelector } from 'reselect';

// 这里为演示方便，代码放这里，因为demo没有按照标准的表现组件和容器组件来封装。
// 重点内容是属于当前页面的私有的数据应该在 本地redux里去组织, 比如这里 todoApp 别的页面并没有用到
const getVisibilityTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos;
			break;
		case 'SHOW_COMPLETED':
			return todos.filter(todo => todo.completed);
			break;
		case 'SHOW_ACTIVITY':
			return todos.filter(todo => !todo.completed);
			break;
		default:
			return todos;
	}
};

const getTodos = state => state.home.todos;
const getVisibility = state => state.home.visibility;

// 获取share data，可能很多地方用到这个数据,
const getHotCity = state => state.common.hotCities;

export default createSelector(
	getTodos,
	getVisibility,
	getHotCity,
	(todos, filter, hotCities) => {
		// parse the data
		todos = getVisibilityTodos(todos, filter);
		return {
			todos,
			visibility: filter,
			hotCities
		}
	}
)