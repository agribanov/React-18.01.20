import {
    ACTION_CATEGORY_SAVE,
    ACTION_CATEGORY_SEARCH
} from '../actions/categories';

const initialState = {
    list: [
        {
            id: 1,
            name: 'Mobile'
        },
        {
            id: 2,
            name: 'TV'
        }
    ],
    search: ''
};

function updateCategory(list, category) {
    return list.map(item => (item.id == category.id ? category : item));
}

function createCategory(list, category) {
    category.id = Date.now();

    return [...list, category];
}

export default function(state = initialState, { type, payload }) {
    console.log('reducer categories', state);
    switch (type) {
        case ACTION_CATEGORY_SAVE:
            return {
                ...state,
                list: payload.id
                    ? updateCategory(state.list, payload)
                    : createCategory(state.list, payload)
            };

        case ACTION_CATEGORY_SEARCH:
            return {
                ...state,
                search: payload
            };
        default:
            return state;
    }
}
