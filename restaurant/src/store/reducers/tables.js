import {
    DELETE_TABLE_ACTION,
    SAVE_TABLE_ACTION,
    SEARCH_TABLE_ACTION
} from '../actions/tables';

const initialState = {
    list: [...Array(10).keys()].map(i => ({ id: i, name: `Table ${i}` })),
    search: ''
};

function updateTable(list, table) {
    return list.map(item => (item.id === table.id ? table : item));
}

function createTable(list, table) {
    table.id = Date.now();

    return [...list, table];
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case DELETE_TABLE_ACTION:
            return {
                ...state,
                list: state.list.filter(item => item.id !== payload)
            };

        case SAVE_TABLE_ACTION:
            return {
                ...state,
                list: payload.id
                    ? updateTable(state.list, payload)
                    : createTable(state.list, payload)
            };

        case SEARCH_TABLE_ACTION:
            return {
                ...state,
                search: payload
            };
        default:
            return state;
    }
};
