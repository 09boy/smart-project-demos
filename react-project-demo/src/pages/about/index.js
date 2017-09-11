import './style';
import connect from 'utils/connect';
import selector from './redux/selector';
import * as actions from './redux/actions';

@connect(selector, actions)
export default class AboutPage extends React.Component {

	render() {
		return (
			<div className='page-container'>
				<h2>About page is created.</h2>
			</div>
		);
	}
}