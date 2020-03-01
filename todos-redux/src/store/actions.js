export const ACTION_DELETE = 'ACTION_DELETE';
export function deleteTodo(id) {
    return {
        type: ACTION_DELETE,
        payload: id
    };
}

export const ACTION_TOGGLE = 'ACTION_TOGGLE';
export function toggleTodo(id) {
    return {
        type: ACTION_TOGGLE,
        payload: id
    };
}

export const ACTION_OPEN_MODAL = 'ACTION_OPEN_MODAL';
export function openModal(id) {
    return {
        type: ACTION_OPEN_MODAL,
        payload: id
    };
}

export const ACTION_CLOSE_MODAL = 'ACTION_CLOSE_MODAL';
export function closeModal() {
    return {
        type: ACTION_CLOSE_MODAL
    };
}

export const ACTION_CHANGE_FORM_ITEM = 'ACTION_CHANGE_FORM_ITEM';
export function changeFormItem(changes) {
    return {
        type: ACTION_CHANGE_FORM_ITEM,
        payload: changes
    };
}

export const ACTION_SAVE_FORM_ITEM = 'ACTION_SAVE_FORM_ITEM';
export function saveFormItem(changes) {
    return {
        type: ACTION_SAVE_FORM_ITEM,
        payload: changes
    };
}
