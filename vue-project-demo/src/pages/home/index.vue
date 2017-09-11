<template>
	<div class="page-container">
		<p class='tip'>这里演示local 和 share的数据是如何组织的:</p>
		<TodoApp></TodoApp>
		<HotCityApp></HotCityApp>
	</div>
</template>
<script>
// import {mapActions, mapMutations, mapGetters} from vuex
	import TodoApp from './TodoApp.vue';
	import HotCityApp from './HotCityApp';

	export default{
		components: {
			TodoApp,
			HotCityApp
		},
		data() {
			return {};
		},
		computed: {},

		methods: {},
	}
</script>
<style lang="scss">
	.tip {
		position: absolute;
		top: -50px;
		text-align: center;
		width: 100%;
		font-size: 18px;
	}

	.demo {
		position: relative;
		margin: 130px auto 30px;
		width: 410px;
		border-right: 1px solid #888;

		border: 1px solid #f3f3f3;
		box-sizing: border-box;
		padding: 10px 20px;

		h3 {
			font-weight: normal;
		}

		label {
			font-size: 12px;
			color: #2196f3;
			margin-bottom: 10px;
			display: inline-block;
		}

		li {
			list-style: none;
		}
	}
</style>