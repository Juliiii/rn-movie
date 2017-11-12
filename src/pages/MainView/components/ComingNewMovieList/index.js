import React from 'react';
import { 
	StyleSheet
} from 'react-native';
import NewMovieList from './components/NewMovieList';

const ComingNewMovieList = () => {
	return (
		<NewMovieList 
			style={styles.wrapper}
		/>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	}
});

export default ComingNewMovieList;