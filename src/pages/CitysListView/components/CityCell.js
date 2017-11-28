import React from 'react';
import { 
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { px2dp } from '../../../utils/px2dp';
import { WW, llightWhite, borderColor, border1px } from '../../../constants/styles';

const CityCell = ({text}) => {
	return (
		<View style={styles.cell}>
			<Text>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	cell: {
		height: px2dp(30),
		width: WW / 3 - px2dp(20),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: llightWhite,
		marginRight: px2dp(10),
		marginLeft: px2dp(10),
		marginTop: px2dp(5),
		marginBottom: px2dp(5),
		borderTopLeftRadius: px2dp(3),
		borderTopRightRadius: px2dp(3),
		borderBottomLeftRadius: px2dp(3),
		borderBottomRightRadius: px2dp(3),
		borderWidth: border1px,
		borderColor
	}
});

export default CityCell;
