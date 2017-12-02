import React, { Component } from 'react';
import { 
	FlatList,
	StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import HPMListItem from './components/ListItem';

class HotPlayMovieList extends Component {
	
	keyExtractor = (item) => item.id;
	
	renderItem = (props) => <HPMListItem {...props} />

	render() {
		const {movies} = this.props;
		return (
			<FlatList
				initialNumToRender={6}
				style={styles.list}
				data={movies}
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

const mapState = state => ({
	movies: state.get('movies').get('hotplayMovies').toArray()
});

export default connect(mapState)(HotPlayMovieList);
