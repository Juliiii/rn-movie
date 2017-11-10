import React from 'react';
import { 
	View,
	StyleSheet
} from 'react-native';

import CityCell from './CityCell';
import { px2dp } from '../../../utils/px2dp';
import { white } from '../../../constants/styles';

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
		backgroundColor: white,
		paddingTop: px2dp(5),
		paddingBottom: px2dp(5)
	}
});

export default CityCellCollection;