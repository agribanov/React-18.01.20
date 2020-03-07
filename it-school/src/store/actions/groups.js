export const DELETE_GROUP_ACTION = 'DELETE_GROUP_ACTION';
export function deleteGroup(id) {
    return {
        type: DELETE_GROUP_ACTION,
        payload: id
    };
}

export const SAVE_GROUP_ACTION = 'SAVE_GROUP_ACTION';
export function saveGroup(group) {
    return {
        type: SAVE_GROUP_ACTION,
        payload: group
    };
}

export const SEARCH_GROUP_ACTION = 'SEARCH_GROUP_ACTION';
export function searchGroup(query) {
    return {
        type: SEARCH_GROUP_ACTION,
        payload: query
    };
}
