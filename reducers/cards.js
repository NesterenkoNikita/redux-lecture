import card from './card';
export default (state = [], action) => {
    switch (action.type) {
        case 'CARD_ADD':
            return [...state, card(undefined, action)]
        default:
            return state;
    }
};
