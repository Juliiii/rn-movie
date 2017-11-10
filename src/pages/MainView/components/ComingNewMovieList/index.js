import React from 'react';
import { 
	View,
	StyleSheet
} from 'react-native';
import HopefulMovieList  from './components/HopefulMovieList';

const ComingNewMovieList = () => {
	return (
		<View style={styles.wrapper}>
			<HopefulMovieList />
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	}
});

export default ComingNewMovieList;