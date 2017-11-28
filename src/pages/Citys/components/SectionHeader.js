import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import { WW, llightWhite } from '../../../constants/styles';
import { px2dp } from '../../../utils/px2dp';

const SectionHeader = ({section}) => (
	<View style={styles.wrapper}>
		<Text>{section.key}</Text>
	</View>
);

const styles = StyleSheet.create({
	wrapper: {
		width: WW,
		height: px2dp(30),
		justifyContent: 'center',
		alignItems: 'flex-start',
		backgroundColor: llightWhite,
		paddingLeft: px2dp(8)
	},
});

export default SectionHeader;
