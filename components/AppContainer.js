import App from './App';
import {connect} from 'react-redux';
import * as actions from '../actions';

import {getListsWithCards} from '../reducers';

export default connect(
    state => ({
        lists: getListsWithCards(state)
    }),
    actions
)(App);
