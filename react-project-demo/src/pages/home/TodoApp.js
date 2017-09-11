const Todo = ({todo, click}) => (
	<li
		className={!todo.completed ? 'todo' : 'todo selected-todo'}
		onClick={() => click(todo.id)}
	>
	{todo.title}
</li>);

export default class TodoApp extends React.Component {
	state = {
		todoText: '',
	}

	addTodoHandle = () => {
		this.props.actions.addTodo(this.state.todoText);
		this.setState({todoText: ''});
	}

	toggleTodoHandle = (id) => {
		this.props.actions.toggleTodo(id);
	}

	setVisibilityHandle = (filter) => {
		this.props.actions.setVisibility(filter);
	}

	onChangeHandle = (todoText) => {
		this.setState({todoText});
	}

	render() {
		const { todos, visibility } = this.props;
		// console.log(this.props)
		return (
			<div className='demo todoapp-warp'>
				<h3>Local State Demo:</h3>
				<p>TodoApp:</p>
				<header>
					<input placeholder='What needs to be done?' 
						value={this.state.todoText}
						onChange={(e) => this.onChangeHandle(e.target.value)}
					/>
					<button onClick={this.addTodoHandle}>Add Todo</button>
				</header>
				<div>
					<label>共有{todos.length}个todo项.</label>
					<ul>
						{
							todos.map(todo => {
								return <Todo key={todo.id} click={this.toggleTodoHandle} todo={todo} />
							})
						}
					</ul>
				</div>
				<footer>
					<nav>
						<a filter='SHOW_ALL' onClick={(e) => this.setVisibilityHandle(e.target.getAttribute('filter'))}>ALL</a>
						<a filter='SHOW_COMPLETED' onClick={(e) => this.setVisibilityHandle(e.target.getAttribute('filter'))}>COMPLETED</a>
						<a filter='SHOW_ACTIVITY' onClick={(e) => this.setVisibilityHandle(e.target.getAttribute('filter'))}>ACTIVITY</a>
					</nav>
				</footer>
			</div>
		);
	}
}