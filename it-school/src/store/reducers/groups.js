import {
    DELETE_GROUP_ACTION,
    SAVE_GROUP_ACTION,
    SEARCH_GROUP_ACTION
} from '../actions/groups';

const initialState = {
    list: [...Array(10).keys()].map(i => ({ id: i, name: `Group ${i}` })),
    search: ''
};

function updateGroup(list, group) {
    return list.map(item => (item.id === group.id ? group : item));
}

function createGroup(list, group) {
    group.id = Date.now();

    return [...list, group];
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case DELETE_GROUP_ACTION:
            return {
                ...state,
                list: state.list.filter(item => item.id !== payload)
            };

        case SAVE_GROUP_ACTION:
            return {
                ...state,
                list: payload.id
                    ? updateGroup(state.list, payload)
                    : createGroup(state.list, payload)
            };

        case SEARCH_GROUP_ACTION:
            return {
                ...state,
                search: payload
            };
        default:
            return state;
    }
};
