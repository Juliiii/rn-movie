import { StackNavigator } from 'react-navigation';
import Main from '../pages/MainView';
import City from '../pages/CitysListView';

const RootAppNavigator = StackNavigator(
	{
		Main: {
			screen: Main
		},
		City: {
			screen: City
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