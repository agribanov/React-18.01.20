import {
    ACTION_DELETE,
    ACTION_TOGGLE,
    ACTION_OPEN_MODAL,
    ACTION_CLOSE_MODAL,
    ACTION_CHANGE_FORM_ITEM,
    ACTION_SAVE_FORM_ITEM
} from './actions';

const initialState = {
    todos: [{ id: '7', title: 'Some very important todo', isDone: true }],
    formItem: null
};

function getEmptyItem() {
    return { title: 'new Todo', isDone: false };
}

function updateTodo(todos, todo) {
    return todos.map(item => (item.id == todo.id ? todo : item));
}

function createTodo(todos, todo) {
    todo.id = Date.now();
    return [...todos, todo];
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_DELETE:
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== payload)
            };
        case ACTION_TOGGLE:
            return {
                ...state,
                todos: state.todos.map(item =>
                    item.id !== payload
                        ? item
                        : { ...item, isDone: !item.isDone }
                )
            };

        case ACTION_OPEN_MODAL:
            return {
                ...state,
                formItem: payload
                    ? state.todos.find(item => item.id == payload)
                    : getEmptyItem()
            };

        case ACTION_CLOSE_MODAL:
            return {
                ...state,
                formItem: null
            };

        case ACTION_CHANGE_FORM_ITEM:
            return {
                ...state,
                formItem: { ...state.formItem, ...payload }
            };

        case ACTION_SAVE_FORM_ITEM:
            return {
                ...state,
                todos: payload.id
                    ? updateTodo(state.todos, payload)
                    : createTodo(state.todos, payload),
                formItem: null
            };

        default:
            return state;
    }
}
