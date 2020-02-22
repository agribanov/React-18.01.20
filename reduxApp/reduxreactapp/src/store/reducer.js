import { INCREMENT_ACTION, ADD_ACTION } from './actions';

const initialState = {
    value: 10
};

export default function(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case INCREMENT_ACTION:
            return { ...state, value: ++state.value };
        case ADD_ACTION:
            return { ...state, value: state.value + action.payload };
        default:
            return state;
    }
}
