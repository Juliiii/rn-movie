import React, { Component } from 'react';

import Header from './components/MainPageHeader';
import {
	View,
	StatusBar
} from 'react-native';


class MainPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<StatusBar hidden />
				<Header {...this.props} />
			</View>
		);
	}
}

export default MainPage;