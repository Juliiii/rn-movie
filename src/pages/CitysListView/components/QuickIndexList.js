import React from 'react';
import {
	Text,
	View,
	StyleSheet
} from 'react-native';
import city from '../../../constants/cities';

class QuickIndexList extends React.PureComponent {

	onPress = (item) => {
		const index = city.indexs.indexOf(item);
		this.props.onPress && this.props.onPress(index);
	}


	ListItem = ({item}) => (<Text onPress={() => this.onPress(item)} key={item} style={styles.text}>{item}</Text>)

	render() {
		return (
			<View style={styles.wrapper}>
				{
					city.indexs.map(item => this.ListItem({item}))
				}
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