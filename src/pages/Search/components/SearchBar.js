import React from 'react';
import { 
	TextInput,
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import { WW, red, mdFontSize, borderColor, llightWhite, lightWhite, grey, border1px } from '../../../constants/styles';
import { px2dp } from '../../../utils/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';

class SearchBar extends React.Component {

	toMainView = () => {
		const { goBack } = this.props.navigation;
		goBack();
	}

	render() {
		return (
			<View style={styles.wrapper}>
				<Icon name='ios-search' style={styles.icon} />
				<TextInput style={styles.input} placeholder="搜电影、搜影院" />
				<TouchableOpacity onPress={this.toMainView} style={styles.button}>
					<Text style={styles.buttonText}>取消</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		width: WW,
		height: px2dp(48),
		paddingLeft: px2dp(10),
		paddingRight: px2dp(10),
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: llightWhite,
		borderBottomWidth: border1px,
		borderBottomColor: borderColor
	},
	input: {
		height: px2dp(30),
		flex: 1,
		borderColor: borderColor,
		borderWidth: px2dp(1),
		borderRadius: px2dp(5),
		backgroundColor: lightWhite,
		paddingLeft: px2dp(29),
		paddingTop: px2dp(3),
		paddingBottom: px2dp(3),
		fontSize: mdFontSize
	},
	button: {
		marginLeft: px2dp(10)
	},
	buttonText: {
		color: red,
		fontSize: mdFontSize
	},
	icon: {
		position: 'absolute',
		left: px2dp(16),
		fontSize: 22,
		color: grey,
		zIndex: 2
	}
});

export default SearchBar;