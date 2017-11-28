import React, { Component } from 'react';

import Header from './components/MainPageHeader';
import HotPlayMovieList from './components/HotPlayMovieList';
import ComingNewMovieList from './components/ComingNewMovieList';
import {
	View,
	StatusBar,
	StyleSheet
} from 'react-native';


class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: '正在热映'
		};
	}

	setActiveTab = (activeTab) => {
		this.setState({
			activeTab
		});
	}

	render() {
		const { activeTab } = this.state;
		const { navigation } = this.props;
		return (
			<View style={styles.wrapper}>
				<StatusBar hidden />
				<Header {...this.props} setActiveTab={this.setActiveTab} activeTab={activeTab} />
				{activeTab === '正在热映' ? <HotPlayMovieList navigation={navigation} /> : <ComingNewMovieList navigation={navigation}/>}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	}
});

export default MainPage;
