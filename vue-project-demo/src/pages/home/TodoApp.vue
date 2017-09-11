<template>
	<div class='demo todoapp-warp'>
		<h3>Local State Demo:</h3>
		<p>TodoApp:</p>
		<header>
			<input placeholder='What needs to be done?' 
				v-model='todoText'
				@keyup.enter='addTodoHandle'
			/>
			<button @click='addTodoHandle'>Add Todo</button>
		</header>
		<div>
			<label>共有{{_todos.length}}个todo项.</label>
			<ul>
				<li class='todo'
						:class='{completed: completed }'
						:key='id'
						:ID='id'
						@click='toggleTodoHandle'
						v-for='{id, title, completed} in _todos'>
					{{title}}
				</li>
			</ul>
		</div>
		<footer>
			<nav>
				<a filter='SHOW_ALL' @click='setVisibilityHandle' :class='{activity: visibility == "SHOW_ALL"}'>ALL</a>
				<a filter='SHOW_COMPLETED' @click='setVisibilityHandle' :class='{activity: visibility == "SHOW_COMPLETED"}'>COMPLETED</a>
				<a filter='SHOW_ACTIVITY' @click='setVisibilityHandle' :class='{activity: visibility == "SHOW_ACTIVITY"}'>ACTIVITY</a>
			</nav>
		</footer>
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		data() {
			return {
				todoText: '',
			}
		},

		computed: {
			_todos () {
				return this.getVisibilityTodos(this.todos);
			},

			...mapGetters([
				'todos',
				'visibility',
			]),
		},
		methods: {
			addTodoHandle() {
				if (this.todoText === '') return;
				this.addTodo(this.todoText);
				this.todoText = '';
			},

			toggleTodoHandle(e) {
				this.toggleTodo(e.target.getAttribute('ID'));
			},

			setVisibilityHandle(e) {
				this.setVisibility(e.target.getAttribute('filter'));
			},

			...mapActions([
				'addTodo',
				'toggleTodo',
				'setVisibility'
			]),

			// 演示方便
			getVisibilityTodos() {
				switch (this.visibility) {
					case 'SHOW_ALL':
						return this.todos;
					case 'SHOW_COMPLETED':
						return this.todos.filter(todo => todo.completed);
					case 'SHOW_ACTIVITY':
						return this.todos.filter(todo => !todo.completed);
				}
			}
		},

		watch: {
			_todos (val, oldVal) {
				console.log('newTodos:', val, 'oldTodos:', oldVal);
			}
		}
	}
</script>
<style lang='scss'>
	.todoapp-warp {
		input {
			width: 274px;
			height: 30px;
			box-sizing: border-box;
			padding: 0 10px;
			font-size: 14px;
		}

		button {
			height: 30px;
			margin-left: 15px;
		}

		header {
			margin-bottom: 15px;
		}

		footer {
			height: 40px;
			line-height: 40px;
			border-top: 1px solid #f3f3f3;
			font-size: 12px;

			a {
				margin-right: 10px;
				color: #888;
			}
		}

		.todo {
			height: 30px;
			line-height: 30px;
			font-size: 14px;
			border-top: 1px solid #f3f3f3;
			border-left: 1px solid #f3f3f3;
			border-right: 1px solid #f3f3f3;
			padding: 0 10px;
		}

		.completed {
			text-decoration: 'line-through';
			color: #f5f5f5;
		}

		a.activity {
			color: red;
		}
	}
</style>