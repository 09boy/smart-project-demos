import './style';
import connect from 'utils/connect';
import selector from './redux/selector';
import * as actions from './redux/actions';

import TodoApp from './TodoApp';
import HotCityApp from './HotCityApp';

@connect(selector, actions)
export default class HomePage extends React.Component {

	render() {
		return (
			<div className='page-container'>
				<p className='tip'>这里演示local 和 share的数据是如何组织的:</p>
				<TodoApp {...this.props} />
				<HotCityApp {...this.props} />
			</div>
		);
	}
}