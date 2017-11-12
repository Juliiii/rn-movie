import React, { PureComponent } from 'react';
import { 
	SectionList
} from 'react-native';

import HopefulMovieList from './HopefulMovieList';
import NewMovieListItem from './NewMovieListItem';
import NewMovieSectionHeader from './NewMovieSectionHeader';
import cities from '../../../../../constants/nmovies';
import { numberToDay } from '../../../../../utils/time';

let map = {};
for (const _ of cities.moviecomings) {
	const ts = new Date(Number(_.rYear), Number(_.rMonth - 1), Number(_.rDay)).getTime();
	map[ts] = map[ts] ? [...map[ts], _] : [_];
}

let sections = [];

for (const _ of Object.entries(map)) {
	const val = _[1][0];
	const day = new Date(Number(val.rYear), Number(val.rMonth - 1), Number(val.rDay)).getDay();
	sections.push({
		data: _[1],
		key: _[0],
		releaseDate: `${val.rMonth}月${val.rDay}日上映 周${numberToDay(day)}`
	});
}

sections.sort((a, b) => {
	const _a = Number(a.key);
	const _b = Number(b.key);
	if (_a > _b) return 1;
	else if (_a < _b) return -1;
	else return 0;
});

console.log(sections);

class NewMovieList extends PureComponent {
	keyExtractor = item => item.id;

	render() {
		return (
			<SectionList
				ListHeaderComponent={HopefulMovieList}
				sections={sections}
				renderItem={NewMovieListItem}
				renderSectionHeader={NewMovieSectionHeader}
				keyExtractor={this.keyExtractor}
			/>
		);
	}
}

export default NewMovieList;