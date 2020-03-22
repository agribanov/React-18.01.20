export const DELETE_TABLE_ACTION = 'DELETE_TABLE_ACTION';
export function deleteTable(id) {
    return {
        type: DELETE_TABLE_ACTION,
        payload: id
    };
}

export const SAVE_TABLE_ACTION = 'SAVE_TABLE_ACTION';
export function saveTable(table) {
    return {
        type: SAVE_TABLE_ACTION,
        payload: table
    };
}

export const SEARCH_TABLE_ACTION = 'SEARCH_TABLE_ACTION';
export function searchTable(query) {
    return {
        type: SEARCH_TABLE_ACTION,
        payload: query
    };
}
