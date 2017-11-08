import React from 'react';
import {
	View,
	StyleSheet
} from 'react-native';
import { WW } from '../../../constants/styles';
import { px2dp } from '../../../utils/px2dp';
const ItemSeparator = () => (
	<View style={styles.line} />
);

const styles = StyleSheet.create({
	line: {
		width: WW - px2dp(10),
		marginLeft: px2dp(5),
		height: 2,
	}
});

export default ItemSeparator;
