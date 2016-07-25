import cuid from 'cuid';

export const cardAdd = (listId, name) => ({
    type: 'CARD_ADD',
    cardId: cuid(),
    listId,
    name
});

export const listAdd = name => ({
    type: 'LIST_ADD',
    listId: cuid(),
    name
});

export const listRemove = listId => ({
    type: 'LIST_REMOVE',
    listId
});

export const userRequest = () => dispatch => {
    dispatch({
        type: 'USER_REQUEST'
    });
    api.getUser()
        .then(user => {
            dispatch({
                type: 'USER_REQUEST_SUCCESS',
                payload: user
            });
        })
        .catch(error => {
            dispatch({
                type: 'USER_REQUEST_FAIL',
                error
            });
        });
}
