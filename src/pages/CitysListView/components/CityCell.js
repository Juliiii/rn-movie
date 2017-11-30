import React from 'react';
import { 
	StyleSheet,
} from 'react-native';
import { px2dp } from '../../../utils/px2dp';
import Cell from '../../../components/Cell';
import { WW } from '../../../constants/styles';

const CityCell = ({text}) => {
	return (
		<Cell style={styles.cell} text={text} />
	);
};

const styles = StyleSheet.create({
	cell: {
		width: WW / 3 - px2dp(20),
		marginRight: px2dp(10),
		marginLeft: px2dp(10),
		marginTop: px2dp(5),
		marginBottom: px2dp(5)
	}
});

export default CityCell;
