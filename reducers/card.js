export default (state, action) => {
    switch (action.type) {
        case 'CARD_ADD':
            return {
                _id: action.cardId,
                listId: action.listId,
                name: action.name
            };
        default:
            return state;
    }
};
