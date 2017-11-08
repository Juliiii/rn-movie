import React from 'react';
import {
	FlatList,
	Text,
	View,
	StyleSheet
} from 'react-native';
import city from '../../../constants/cities';


class QuickIndexList extends React.Component {
	ListItem = ({item}) => (<Text style={styles.text}>{item}</Text>)

	keyExtractor = (item) => item

	render() {
		return (
			<View style={styles.wrapper}>
				<FlatList
					data={city.indexs}
					renderItem={this.ListItem}
					keyExtractor={this.keyExtractor}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		right: 0,
		top: 40,
		zIndex: 10,
		backgroundColor: 'transparent'
	},
	text: {
		textAlign: 'center'
	}
});

export default QuickIndexList;