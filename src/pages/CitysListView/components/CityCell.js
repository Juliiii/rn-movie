import React from 'react';
import { 
	View,
	Text,
	StyleSheet,
	PixelRatio
} from 'react-native';
import { px2dp } from '../../../utils/px2dp';
import { WW, lightWhite, borderColor } from '../../../constants/styles';

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
		backgroundColor: lightWhite,
		marginRight: px2dp(10),
		marginLeft: px2dp(10),
		marginTop: px2dp(5),
		marginBottom: px2dp(5),
		borderTopLeftRadius: px2dp(3),
		borderTopRightRadius: px2dp(3),
		borderBottomLeftRadius: px2dp(3),
		borderBottomRightRadius: px2dp(3),
		borderWidth: 1 / PixelRatio.get(),
		borderColor
	}
});

export default CityCell;
