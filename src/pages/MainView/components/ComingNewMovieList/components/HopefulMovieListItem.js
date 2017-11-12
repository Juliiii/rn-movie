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

const WrapperHeight = 140;
const WrapperWidth = 95;
const ImageHeight = 100;
const ImageWidth = 75;
const WrapperPadding = 10;

const styles = StyleSheet.create({
	wrapper: {
		height: px2dp(WrapperHeight),
		width: px2dp(WrapperWidth),
		paddingLeft: px2dp(WrapperPadding),
		paddingRight: px2dp(WrapperPadding),
		alignItems: 'flex-start',
		backgroundColor: white
	},
	image: {
		height: px2dp(ImageHeight),
		width: px2dp(ImageWidth)
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
		width: px2dp(ImageWidth),
		position: 'absolute',
		top: px2dp(85),
		left: px2dp(10),
		backgroundColor: 'rgba(0, 0, 0, .5)',
		color: yellow,
		fontSize: msmFontSize,
		paddingLeft: px2dp(3)
	}
});


export default HopefulMovieListItem;
