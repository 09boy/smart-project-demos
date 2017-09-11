const receiveAddTodo = (title) => ({
	type: 'ADD_TODO',
	title,
});

export const addTodo = (title) => {
	return (dispatch) => {
		dispatch(receiveAddTodo(title));
	}
};

const receiveToggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id,
});

export const toggleTodo = (id) => {
	return (dispatch) => {
		dispatch(receiveToggleTodo(id));
	}
};

const receiveVisibility = (filter) => ({
	type: 'SET_VISIBILITY_FILTER',
	filter,
});

export const setVisibility = (filter) => {
	return (dispatch) => {
		dispatch(receiveVisibility(filter));
	}
};
