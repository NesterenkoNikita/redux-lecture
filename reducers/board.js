import {
    combineReducers
} from 'redux';

import cards from './cards';
import lists, * as fromLists from './lists';
import user from './user';

export default combineReducers({
    cards,
    lists,
    user
});

export const getListsWithCards = state => {
    return fromLists.getListsWithCards(state.lists, state.cards)
};

export const getLists = state => state.lists;
