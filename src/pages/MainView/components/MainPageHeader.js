/*
the header component in the main page

created by juliiii

time: 2017.11.7
*/

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	PixelRatio,
	TouchableOpacity,
	Animated,
} from 'react-native';
import { px2dp } from '../../../utils/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';
import { WW, red, white, borderColor } from '../../../constants/styles';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '选择',
			tabs: ['正在热映', '即将上映'],
			xPosition: new Animated.Value(0)
		};
	}

	componentDidMount() {
		// navigator.geolocation.getCurrentPosition(
		//   (position) => {
		//     var initialPosition = JSON.stringify(position);
		//     AlertIOS.alert('123', initialPosition);
		//   },
		//   (error) => alert(error.message),
		//   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
		// ); 
	}


	toCityView = () => {
		const { navigate } = this.props.navigation;
		navigate('City');
	}


	toSearch = () => {
		const { navigate } = this.props.navigation;
		navigate('Search');
	}

	switchTab = (val) => {
		const { tabs, xPosition } = this.state;
		const { activeTab } = this.props;
		if (val === activeTab) return;

		this.props.setActiveTab(val);

		const offset = tabs.indexOf(val) * px2dp(80);

		Animated.timing(
			xPosition,
			{
				toValue: px2dp(offset),
			}
		).start(); 
	}

	createTab = (tab) => {
		const { activeTab } = this.props;

		return (
			<TouchableOpacity onPress={() => this.switchTab(tab)} key={tab}>
				<View style={styles.tab}>
					<View style={styles.tabTextContainer}>
						<Text style={[styles.tabText, activeTab === tab ? styles.selectedText : null]}>{tab}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}

	render() {
		const { city, tabs } =  this.state;

		return (
			<View style={styles.header}>
				<Icon.Button
					name="ios-arrow-down"
					activeOpacity={1}
					backgroundColor={white}
					style={styles.button}
					iconStyle={styles.iconStyle} 
					onPress={this.toCityView}>
					<Text style={styles.iconButtonText}>{city}</Text>
				</Icon.Button>

				<View style={styles.tabs}>
					<View style={styles.tabContainer}>
						{
							tabs.map(this.createTab)
						}
					</View>
					<Animated.View
						style={[
							styles.tabLine,
							{
								transform: [
									{
										translateX: this.state.xPosition
									}
								]}
						]} 
					/>
				</View>

				<Icon
					name="ios-search"
					onPress={this.toSearch}
					size={24}
					color={red}
					style={styles.search}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	iconStyle: {
		position: 'absolute',
		right: -5,
		color: '#333',
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: px2dp(40),
		width: WW,
		backgroundColor: white,
		borderBottomColor: borderColor,
		borderBottomWidth: 1/PixelRatio.get(),
	},
	button: {
		width: px2dp(60)
	},
	iconButtonText: {
		fontSize: 16
	},
	tabs: {
		height: px2dp(40),
		marginLeft: 'auto',
		marginRight: 'auto',
		alignItems: 'center'
	},
	tabContainer: {
		flexDirection: 'row'
	},
	tab: {
		justifyContent: 'center',
		height: px2dp(38),
		width: px2dp(80),
	},
	tabTextContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	selectedText: {
		color: red,
	},
	tabText: {
		fontSize: 16,
	},
	tabLine: {
		backgroundColor: red,
		height: px2dp(2),
		width: px2dp(80),
		alignSelf: 'flex-start'
	},
	search: {
		width: px2dp(60),
		textAlign: 'right',
		paddingRight: px2dp(5)
	}
});
