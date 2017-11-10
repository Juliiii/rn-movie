import React from 'react';
import { 
	Image,
	Text,
	View,
	StyleSheet
} from 'react-native';

import { px2dp } from '../../../../../utils/px2dp';
import { white, msmFontSize, grey, yellow } from '../../../../../constants/styles';

const HopefulMovieListItem = ({item}) => {
	return (
		<View style={styles.wrapper}>
			<Image
				style={styles.image}
				source={{uri: item.image}}
			/>
			<Text style={styles.wantSee}>{item.wantedCount}人想看</Text>
			<Text numberOfLines={1} style={styles.title}>{item.title}</Text>
			<Text style={styles.time}>{`${item.rMonth}月${item.rDay}日`}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		height: px2dp(140),
		width: px2dp(95),
		paddingLeft: px2dp(10),
		paddingRight: px2dp(10),
		alignItems: 'flex-start',
		backgroundColor: white
	},
	image: {
		height: px2dp(100),
		width: px2dp(75)
	},
	title: {
		marginTop: px2dp(4),
		marginBottom: px2dp(4)
	},
	time: {
		fontSize: msmFontSize,
		color: grey
	},
	wantSee: {
		position: 'absolute',
		top: px2dp(85),
		left: px2dp(10),
		backgroundColor: 'transparent',
		color: yellow,
		fontSize: msmFontSize
	}
});


export default HopefulMovieListItem;
