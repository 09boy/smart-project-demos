const homeState = {
	todos: [],
	visibility: 'ALL',
};

let id = -1;

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			id++;
			return [...state, {title: action.title, completed: false, id}];
		case 'TOGGLE_TODO':
			return state.map(todo => (todo.id == action.id ? {...todo, completed: !todo.completed} : todo));
		default:
			return state;
	}
};

const home = (state = homeState, action) => ({
	todos: todos(state.todos, action),
	visibility: visibilityFilter(state.visibility, action)
});

export default home;