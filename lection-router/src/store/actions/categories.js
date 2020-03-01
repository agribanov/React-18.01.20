export const ACTION_CATEGORY_SAVE = 'ACTION_CATEGORY_SAVE';
export function saveCategory(category) {
    return {
        type: ACTION_CATEGORY_SAVE,
        payload: category
    };
}

export const ACTION_CATEGORY_SEARCH = 'ACTION_CATEGORY_SEARCH';
export function searchCategory(query) {
    return {
        type: ACTION_CATEGORY_SEARCH,
        payload: query
    };
}
