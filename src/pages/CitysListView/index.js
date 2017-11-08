import React from 'react';
import {
	SectionList,
	View
} from 'react-native';

import city from '../../constants/cities';
import SectionHeader from './components/SectionHeader';
import ListItem from './components/ListItem';
import ItemSeparator from './components/ItemSeparator';
import QuickIndexList from './components/QuickIndexList';

class SectionListExample extends React.PureComponent {
	static title = '<SectionList>';
	static description = 'Performant, scrollable list of data.';

	state = {
		virtualized: true,
	};
	render() {
		return (
			<View>
				<QuickIndexList />
				<SectionList
					enableVirtualization
					renderItem={ListItem}
					ItemSeparatorComponent={ItemSeparator}
					renderSectionHeader={SectionHeader}
					sections={city.cities}
					initialNumToRender={25}
				/>
			</View>
		);
	}

}

export default SectionListExample;
