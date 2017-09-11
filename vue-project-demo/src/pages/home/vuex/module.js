// 关于 actionTypes 可以单独放在一个独立文件内，根据需求自己定
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TOTOD = 'TOGGLE_TOTOD';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

let id = 0;
export default {
	state: {
		todos: [],
		visibility: 'SHOW_ALL'
	},

	mutations: {
		[ADD_TODO](state, title) {
			state.todos = [...state.todos, {id, title, completed: false}]
			id++;
		},

		[TOGGLE_TOTOD](state, id) {
			state.todos = state.todos.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo);
		},

		[SET_VISIBILITY_FILTER](state, filter) {
			state.visibility = filter;
		}
	},

	actions: {
		addTodo({commit}, title) {
			commit(ADD_TODO, title);
		},

		toggleTodo({commit}, id) {
			commit(TOGGLE_TOTOD, id);
		},

		setVisibility({commit}, filter) {
			commit(SET_VISIBILITY_FILTER, filter);
		}
	},

	getters: {
		todos: state => state.todos,
		visibility: state => state.visibility,
	},
}