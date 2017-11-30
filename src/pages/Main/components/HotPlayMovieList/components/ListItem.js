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
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
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

const HPMListItem = ({item, toDetail}) => {

	function hasPlayed (rd) {
		const now = new Date(), y = now.getFullYear(), m = now.getMonth() + 1, d = now.getDate();
		const _y = rd.slice(0, 4), _m = rd.slice(4, 6), _d = rd.slice(6);
		return new Date(y, m, d).getTime() < new Date(Number(_y), Number(_m), Number(_d));
	}

	return (
		<TouchableHighlight onPress={toDetail}>
			<View style={styles.wrapper}>
				<Image style={styles.image} source={{uri: item.img ? item.img : defaultImg}}/>
				<View style={styles.rightPart}>
					<View style={styles.movieInfo}>
						<Text style={styles.movieCName}>{item.tCn}</Text>
						<View style={styles.movieOtherInfoWrapper}>
							{!hasPlayed(item.rd) ?
								(<Text style={styles.movieOtherInfo}>
									{item.r == -1 ? '暂无评分' : '观众评 '}
									{item.r !== -1 ? <Text style={styles.movieScore}>{item.r}</Text> : null}
								</Text>) : 
								<Text style={styles.movieOtherInfo}>
									<Text style={styles.movieScore}>{item.wantedCount}</Text>
									人想看
								</Text>
							}
							<Text style={styles.movieActors} numberOfLines={1}>主演：{item.actors.split(' / ').join(',')}</Text>
							{!hasPlayed(item.rd) 
								? <Text style={styles.moviePlay}>今天{item.cC}家影院放映了{item.NearestShowtimeCount}场</Text>
								: <Text style={styles.movieComeing}>{`${item.rd.slice(0, 4)}-${item.rd.slice(4, 6)}-${item.rd.slice(6)}上映`}</Text>
							}
						</View>
					</View>
					<TouchableOpacity
						style={[styles.button, !hasPlayed(item.rd) ? styles.buttonBuy : styles.buttonSale]}
					>
						<Text style={styles.buttonText}>{!hasPlayed(item.rd) ? '购票' : '预售'}</Text>
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
	buttonBuy: {
		backgroundColor: red
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

const mapDispatch = dispatch => ({
	toDetail() {
		dispatch(NavigationActions.navigate({ routeName: 'Detail' }));
	}
});

export default connect(null, mapDispatch)(HPMListItem);
