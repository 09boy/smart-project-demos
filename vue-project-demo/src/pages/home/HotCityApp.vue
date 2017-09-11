<template>
	<div class='demo hotcityapp-warp'>
		<h3>Share State Demo:</h3>
		<p>HotCityApp:</p>
		<header>
			<button @click='getHotCities'>Get Hot Cities</button>
			<label>{{loadStatus}}</label>
		</header>
		<div>
			<label>共有{{hotCities.length}}个热门城市.</label>
			<ul>
				<li
					:key='name'
					v-for='name in hotCities'
				>
					{{name}}
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		data() {
			return {
				loadStatus: '',
			}
		},

		computed: {
			...mapGetters([
				'hotCities',
			]),
		},
		methods: {
			getHotCities() {
				this.loadStatus = 'loading...';
				this.fetchHotCities().then(resp => {
					this.loadStatus = '';
				});
			},

			...mapActions([
				'fetchHotCities'
			])
		}
	}
</script>
<style lang='scss'>
	.hotcityapp-warp {
		margin-top: 30px;

		button {
			height: 30px;
			margin-bottom: 20px;
			margin-right: 10px;
		}

		li {
			border-top: 1px solid #f3f3f3;
			line-height: 30px;
		}

		li:last-child {
			border-bottom: 1px solid #f3f3f3;
			margin-bottom: 20px;
		}
	}
</style>