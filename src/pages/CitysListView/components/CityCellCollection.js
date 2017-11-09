import React from 'react';
import { 
	View,
	StyleSheet
} from 'react-native';

import CityCell from './CityCell';
import { px2dp } from '../../../utils/px2dp';

const CityCellCollection = ({item}) => {
	return (
		<View style={styles.wrapper}>
			{item .map(ii => <CityCell key={ii.id} text={ii.n} />)}
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: '#ffffff',
		paddingTop: px2dp(5),
		paddingBottom: px2dp(5)
	}
});

export default CityCellCollection;