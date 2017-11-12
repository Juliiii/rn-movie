// TODO LOADMORE

import React, { Component } from 'react';
import { 
	FlatList,
	StyleSheet,
} from 'react-native';
import HPMListItem from './components/ListItem';
import movies from '../../../../constants/movies';

class HotPlayMovieList extends Component {
	
	keyExtractor = (item) => item.id;

	render() {
		return (
			<FlatList
				initialNumToRender={6}
				style={styles.list}
				data={movies.data.slice(0, 20)}
				keyExtractor={this.keyExtractor}
				renderItem={HPMListItem}
			/>
		);
	}
}

const styles = StyleSheet.create({
	list: {
		flex: 1
	}
});

export default HotPlayMovieList;