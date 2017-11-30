import React from 'react';
import {
	SectionList,
	View,
	StyleSheet,
} from 'react-native';

import city from '../../constants/cities';
import SectionHeader from './components/SectionHeader';
import ListItem from './components/CityListItem';
import ItemSeparator from './components/ItemSeparator';
import QuickIndexList from './components/QuickIndexList';
import CityCellCollection from './components/CityCellCollection';

import { px2dp } from '../../utils/px2dp';

class SectionListExample extends React.PureComponent {
	state = {
		section: [{
			key: '定位城市',
			renderItem: CityCellCollection,
			data: [[{'n': '123', id: 123}]]
		}, {
			key: '最近访问城市',
			renderItem: CityCellCollection,
			data: [[{'n': '123', id: 1232}, {'n': '123', id: 1235}, {'n': '123', id: 123}]]
		}, {
			key: '热门城市',
			renderItem: CityCellCollection,
			data: [['上海', '北京', '广州', '深圳', '武汉', '天津', '西安', '南京', '杭州', '成都', '重庆'].map(_ => 
				city.allcities.find(item => item.n === _)
			)]
		}, ...city.cities]
	}

	onPress = (sectionIndex) => {
		this.seclist.scrollToLocation({
			sectionIndex,
			itemIndex: -1,
			animated: false
		});
	}

	getItemLayout = (data, index) => {
		if (index === 0 || index === 1) {
			return {
				length: px2dp(40),
				offset: px2dp(30) + px2dp(40),
				index
			};
		}

		if (index === 2) {
			return {
				length: px2dp(160),
				offset: px2dp(160) + px2dp(30),
				index
			};
		}
		return {
			length: px2dp(30),
			offset: px2dp(32) * index + px2dp(30),
			index
		};
	}

	renderItem = (props) => <ListItem {...props} />;
	
	render() {
		const { section } = this.state;
		return (
			<View style={styles.wrapper}>
				<QuickIndexList onPress={this.onPress} />
				<SectionList
					ref={(e) => this.seclist = e}
					enableVirtualization
					renderItem={this.renderItem}
					keyExtractor={(item) => item.id}
					ItemSeparatorComponent={ItemSeparator}
					renderSectionHeader={SectionHeader}
					sections={section}
					getItemLayout={this.getItemLayout}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1
	}
});

export default SectionListExample;
