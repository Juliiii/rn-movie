import React from 'react';
import {
	FlatList,
	Text,
	View,
	StyleSheet
} from 'react-native';
import city from '../../../constants/cities';

class QuickIndexList extends React.Component {

	onPress = (item) => {
		const index = city.indexs.indexOf(item);
		this.props.onPress && this.props.onPress(index);
	}


	ListItem = ({item}) => (<Text onPress={() => this.onPress(item)} style={styles.text}>{item}</Text>)

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
		top: 70,
		zIndex: 10,
		backgroundColor: 'transparent'
	},
	text: {
		textAlign: 'center'
	}
});

export default QuickIndexList;