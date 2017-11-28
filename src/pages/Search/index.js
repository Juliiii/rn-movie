import React from 'react';
import {
	View,
	StyleSheet
} from 'react-native';
import SearchBar from './components/SearchBar';
import HotSearch from './components/HotSearch';
import { WH, WW, llightWhite } from '../../constants/styles';


class Search extends React.Component {
	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.wrapper}>
				<SearchBar navigation={navigation}/>
				<HotSearch />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		height: WH,
		width: WW,
		backgroundColor: llightWhite		
	}
});

export default Search;