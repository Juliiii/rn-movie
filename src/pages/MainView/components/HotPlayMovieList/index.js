import React, { Component } from 'react';
import { 
	FlatList,
	StyleSheet,
	Text
} from 'react-native';
import HPMListItem from './components/ListItem';
import movies from '../../../../constants/movies';

class HotPlayMovieList extends Component {
	
	keyExtractor = (item) => item.id;

	render() {
		console.log(movies.data);
		return (
			<FlatList
				initialNumToRender={15}
				style={styles.list}
				data={movies.data}
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