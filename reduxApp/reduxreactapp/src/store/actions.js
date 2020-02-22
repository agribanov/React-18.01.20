export const INCREMENT_ACTION = 'INCREMENT';
export function increment() {
    return { type: INCREMENT_ACTION };
}

export const ADD_ACTION = 'ADD';
export function add(val) {
    return { type: ADD_ACTION, payload: val };
}
