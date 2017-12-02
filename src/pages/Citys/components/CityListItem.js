import React from 'react';
import {
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { WW, white } from '../../../constants/styles';
import { px2dp } from '../../../utils/px2dp';
import { connect } from 'react-redux';
import * as actions from '../../../actions/movies';

const ListItem = ({item, getMoviesByCity}) => {

	function onClick() {
		getMoviesByCity({locationId: item.id});
	}

	return (
		<TouchableOpacity style={styles.wrapper} onPress={onClick}>
			<Text>{item.n}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		width: WW,
		height: px2dp(30),
		paddingLeft: px2dp(5),
		paddingRight: px2dp(5),
		paddingTop: px2dp(2),
		paddingBottom: px2dp(2),
		alignItems: 'flex-start',
		justifyContent: 'center',
		backgroundColor: white
	}
});

const mapDispatch = dispatch => ({
	getMoviesByCity({locationId}) {
		dispatch(actions.getHotPlayMovies({locationId}));
		dispatch(NavigationActions.navigate( {routeName: 'Main'} ));
	}
});


export default connect(null, mapDispatch)(ListItem);
