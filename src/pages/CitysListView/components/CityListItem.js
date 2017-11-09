import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';
import { WW } from '../../../constants/styles';
import { px2dp } from '../../../utils/px2dp';

const ListItem = ({item}) => {
	return (
		<View style={styles.wrapper}>
			<Text>{item.n}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		width: WW,
		height: px2dp(30),
		paddingLeft: px2dp(5),
		paddingRight: px2dp(5),
		paddingTop: px2dp(2),
		paddingBottom: px2dp(2),
		alignItems: 'flex-start',
		justifyContent: 'center',
		backgroundColor: '#ffffff'
	}
});

export default ListItem;
