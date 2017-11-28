import React from 'react';
import { 
	View,
	Text,
	StyleSheet
} from 'react-native';
import { white, grey, lgFontSize } from '../../../constants/styles';
import Cell from '../../../components/Cell';
import cities from '../../../constants/movies';
import { px2dp } from '../../../utils/px2dp';


const data = cities.data.map(_ => _.tCn).slice(0, 8);


function HotSearch() {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>热门搜索</Text>
			<View style={styles.cells}>
				{
					data.map(_ => <Cell text={_} key={_} style={styles.cell} />)
				}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: white,
		paddingLeft: px2dp(10),
		paddingRight: px2dp(10),
		paddingTop: px2dp(20),
		paddingBottom: px2dp(20)
	},
	title: {
		fontSize: lgFontSize,
		color: grey,
		marginBottom: px2dp(10)
	},
	cells: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start'
	},
	cell: {
		paddingLeft: px2dp(10),
		paddingRight: px2dp(10),
		marginTop: px2dp(15),
		marginRight: px2dp(10)
	}
});



export default HotSearch;