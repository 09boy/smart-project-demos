<template>
	<nav class='RootNav_Component'>
		<router-link 
			:name='name'
			:to='path'
			:key='name'
			v-for='{path, name} in rootNavData'
		>{{name.toUpperCase()}}</router-link>
	</nav>
</template>
<script>
	import { mapGetters } from 'vuex';

	export default{
		data() {
			return {

			}
		},
		computed: {
			...mapGetters(['rootNavData'])
		},
		methods: {},
		/*mounted() {
			console.log(this.rootNavData)
		}*/
	}
</script>
<style lang="scss">
	.RootNav_Component {
		a {
      text-decoration: none;
      color: #333;
      margin: 0 10px;
    }

    a:hover {
      color: #d8850b;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    position: absolute;
    height: 60px;
    line-height: 60px;
    width: 100%;
    top: 0;
    z-index: 1;
    text-align: center;
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .15);

    a.router-link-exact-active {
    	color: red;
    }
	}
</style>