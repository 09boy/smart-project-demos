const Item = ({city}) => (
	<li
		className='todo'
	>
	{city}
</li>);

export default class HotCityApp extends React.Component {
	state = {
		loadStatus: '',
	}

	getCities = () => {
		// if (!!this.props.hotCities.length) return;
		this.setState({loadStatus: 'loading...'});
		this.props.actions.getHotCities().then(() => {
			this.setState({loadStatus: ''});
		});
	}

	render() {
		const { hotCities } = this.props;

		return (
			<div className='demo hotcityapp-warp'>
				<h3>Share State Demo:</h3>
				<p>HotCityApp:</p>
				<header>
					<button onClick={this.getCities}>Get Hot Cities</button>
					<label>{this.state.loadStatus}</label>
				</header>
				<div>
					<label>共有{hotCities.length}个热门城市.</label>
					<ul>
						{
							hotCities.map((city, index) => {
								return <Item key={index} click={this.toggleTodoHandle} city={city} />
							})
						}
					</ul>
				</div>
			</div>
		);
	}
}