import React from 'react';
import { 
	View,
	Text,
	StyleSheet
} from 'react-native';
import { px2dp } from '../../utils/px2dp';
import { llightWhite } from '../../constants/styles';

const Cell = ({text, style}) => {
	return (
		<View style={[styles.cell, style]}>
			<Text>{text}</Text>
		</View>
	);
};

export default Cell;

const styles = StyleSheet.create({
	cell: {
		height: px2dp(30),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: llightWhite,
		borderTopLeftRadius: px2dp(5),
		borderTopRightRadius: px2dp(5),
		borderBottomLeftRadius: px2dp(5),
		borderBottomRightRadius: px2dp(5),
	}
});