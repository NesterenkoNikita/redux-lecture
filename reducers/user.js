export default (state = {
    user: null,
    errors: [],
    isLoading: false
}, action) => {
    switch (action.type) {
        case 'USER_REQUEST':
            return {
                ...state,
                errors: [],
                isLoading: true
            };
        case 'USER_REQUEST_FAIL':
            return {
                ...state,
                errors: [...state.errors, action.error],
                isLoading: false
            };
        case 'USER_REQUEST_SUCCESS':
            return {
                errors: [],
                isLoading: false,
                user: action.payload
            };
        case 'USER_RENAME':
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.name
                }
            }
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
};

export const getUser = state => state.user;
