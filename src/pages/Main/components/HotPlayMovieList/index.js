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
	renderItem = (props) => <HPMListItem {...props} navigation={this.props.navigation} /> 
	render() {
		return (
			<FlatList
				initialNumToRender={6}
				style={styles.list}
				data={movies.data.slice(0, 10)}
				keyExtractor={this.keyExtractor}
				renderItem={this.renderItem}
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