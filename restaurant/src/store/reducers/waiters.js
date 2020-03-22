import {
    DELETE_WAITER_ACTION,
    CREATE_WAITER_ACTION,
    UPDATE_WAITER_ACTION,
    SEARCH_WAITER_ACTION,
    CHANGE_WAITERS_REQUESTS_COUNT_ACTION,
    SET_WAITERS_ACTION
} from '../actions/waiters';

const initialState = {
    list: [],
    search: '',
    pendingRequestsCount: 0
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case DELETE_WAITER_ACTION:
            return {
                ...state,
                list: state.list.filter(item => item.id !== payload)
            };

        case CREATE_WAITER_ACTION:
            return {
                ...state,
                list: [...state.list, payload]
            };

        case UPDATE_WAITER_ACTION:
            return {
                ...state,
                list: state.list.map(item =>
                    item.id === payload.id ? payload : item
                )
            };

        case SEARCH_WAITER_ACTION:
            return {
                ...state,
                search: payload
            };

        case SET_WAITERS_ACTION:
            return {
                ...state,
                list: payload
            };

        case CHANGE_WAITERS_REQUESTS_COUNT_ACTION:
            return {
                ...state,
                pendingRequestsCount: state.pendingRequestsCount + payload
            };

        default:
            return state;
    }
};
