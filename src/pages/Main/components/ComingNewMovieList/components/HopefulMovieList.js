import React, {PureComponent} from 'react';
import { 
	FlatList,
	View,
	Text,
	StyleSheet
} from 'react-native';
import HopefulMovieListItem from './HopefulMovieListItem';
import movies from '../../../../../constants/nmovies';
import { px2dp } from '../../../../../utils/px2dp';
import { white } from '../../../../../constants/styles';

class HopefulMovieList extends PureComponent {
	keyExtractor = (item) => item.id

	render() {
		return (
			<View style={styles.wrapper}>
				<Text style={styles.header}>近期最受期待</Text>
				<FlatList
					horizontal
					initialNumToRender={5}
					keyExtractor={this.keyExtractor}
					data={movies.attention}
					renderItem={HopefulMovieListItem}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: white,
		paddingBottom: px2dp(10),
		marginBottom: px2dp(10)
	},
	header: {
		paddingLeft: px2dp(10),
		paddingTop: px2dp(10),
		paddingBottom: px2dp(10),
	}
});

export default HopefulMovieList;