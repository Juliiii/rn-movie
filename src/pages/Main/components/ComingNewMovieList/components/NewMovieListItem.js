import React from 'react';
import { 
	View,
	TouchableHighlight,
	TouchableOpacity,
	Text,
	StyleSheet,
	Image,
} from 'react-native';

import { px2dp } from '../../../../../utils/px2dp';
import { 
	WW,
	white,
	borderColor,
	red,
	orange,
	blue,
	msmFontSize,
	lgFontSize,
	mdFontSize
} from '../../../../../constants/styles';

const defaultImg = 'http://www.easynai.com/images/%E6%9A%82%E6%97%A0%E5%9B%BE%E7%89%87.png';

const CNMListItem = ({item}) => {
	return (
		<TouchableHighlight>
			<View style={styles.wrapper}>
				<Image style={styles.image} source={{uri: item.image ? item.image : defaultImg}}/>
				<View style={styles.rightPart}>
					<View style={styles.movieInfo}>
						<Text style={styles.movieCName} numberOfLines={1}>{item.title}</Text>
						<View style={styles.movieOtherInfoWrapper}>
							<Text style={styles.movieOtherInfo}>
								<Text style={styles.movieScore}>{item.wantedCount}</Text>
								人想看
							</Text>
							<Text style={styles.movieActors} numberOfLines={1}>主演：{`${item.actor1},${item.actor2}`}</Text>
							<Text style={styles.movieComeing}>{`${item.rYear}-${item.rMonth}-${item.rDay}上映`}</Text>
						</View>
					</View>
					<TouchableOpacity
						style={[styles.button, item.isTicket ? styles.buttonSale : styles.buttonWantSee]}
					>
						<Text style={styles.buttonText}>{item.isTicket ? '预售' : '想看'}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableHighlight>
	);
};
const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		width: WW,
		height: px2dp(100),
		paddingLeft: px2dp(10),
		paddingRight: px2dp(10),
		backgroundColor: white
	},
	rightPart: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: px2dp(1),
		borderBottomColor: borderColor,
		marginTop: px2dp(10),
	},
	image: {
		width: px2dp(60),
		height: px2dp(80),
		marginRight: px2dp(15),
		marginTop: px2dp(10),
		marginBottom: px2dp(10)
	},
	button: {
		width: px2dp(50),
		height: px2dp(30),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: red,
		borderRadius: px2dp(5)
	},
	buttonWantSee: {
		backgroundColor: orange
	},
	buttonSale: {
		backgroundColor: blue
	},
	buttonText: {
		color: white
	},
	movieInfo: {
		flex: 1,
		height: px2dp(80),
	},
	movieCName: {
		fontSize: lgFontSize,
		fontWeight: 'bold'
	},
	movieOtherInfo: {
		fontSize: msmFontSize
	},
	movieComeing: {
		fontSize: msmFontSize
	},
	moviePlay: {
		fontSize: msmFontSize
	},
	movieScore: {
		fontWeight: 'bold',
		color: orange,
		fontSize: mdFontSize
	},
	movieOtherInfoWrapper: {
		flex: 1,
		justifyContent: 'center',
		marginTop: px2dp(5)
	},
	movieActors: {
		marginTop: px2dp(5),
		marginBottom: px2dp(5),
		fontSize: msmFontSize
	}
});

export default CNMListItem;