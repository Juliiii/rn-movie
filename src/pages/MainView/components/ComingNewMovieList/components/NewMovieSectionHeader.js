import React from 'react';
import { 
	Text,
	StyleSheet,
	View
} from 'react-native';
import { px2dp } from '../../../../../utils/px2dp';
import { WW, white } from '../../../../../constants/styles';

const SecHeader = ({section}) => (
	<View style={styles.header}>
		<Text>{section.releaseDate}</Text>
	</View>
);

const styles = StyleSheet.create({
	header: {
		height: px2dp(30),
		width: WW,
		backgroundColor: white,
		justifyContent: 'center',
		alignItems: 'flex-start',
		paddingLeft: px2dp(10)
	}
});

export default SecHeader;