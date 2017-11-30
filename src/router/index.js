import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import RootAppNavigator from './routes';

const HOC = ({dispatch, nav}) => (
	<RootAppNavigator
		navigation={addNavigationHelpers({dispatch, state: nav})}
	/>
);

export default connect(state => ({nav: state.get('nav').toJS()}) , null)(HOC);
