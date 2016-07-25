import list, * as fromList from './list';

export default (state = [], action) => {
    switch (action.type) {
        case 'LIST_ADD':
            return [...state, list(undefined, action)]
        case 'LIST_REMOVE':
            return state.filter(list => {
                return list._id !== action.listId;
            });
        default:
            return state;
    }
}

export const getListsWithCards = (state, cards) => {
    return state.map(list => fromList.getListWithCards(list, cards))
};
