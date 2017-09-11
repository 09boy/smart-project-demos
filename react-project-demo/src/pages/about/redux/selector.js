import { createSelector } from 'reselect';

// write your code instead of the following code
const getAboutState = state => state.about;

export default createSelector(
	getAboutState,
	(data) => {
		// parse the data

		return {
			data
		}
	}
)