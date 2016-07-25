export default (state, action) => {
    switch (action.type) {
        case 'LIST_ADD':
            return {
                _id: action.listId,
                name: action.name
            };
            break;
        default:
            return state;
    }
}

export const getListWithCards = (state, cards) => {
    return {
        ...state,
        cards: cards
            .filter(card => card.listId === state._id)
            .map(card => card.name)
    };
}
