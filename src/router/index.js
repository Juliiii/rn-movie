import { StackNavigator } from 'react-navigation';
import Main from '../pages/Main';
import City from '../pages/Citys';
import Search from '../pages/Search';
import Detail from '../pages/Detail';

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
		},
		Detail: {
			screen: Detail
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