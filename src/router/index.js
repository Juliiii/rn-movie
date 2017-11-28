import { StackNavigator } from 'react-navigation';
import Main from '../pages/MainView';
import City from '../pages/CitysListView';
import Search from '../pages/Search';

const RootAppNavigator = StackNavigator(
	{
		Main: {
			screen: Main
		},
		City: {
			screen: City
		},
		Search: {
			screen: Search
		}
	},
	{
		initialRouteName: 'Main',
		headerMode: 'none',
		navigationOptions: {
			gesturesEnabled: true
		}
	}
);

export default RootAppNavigator;