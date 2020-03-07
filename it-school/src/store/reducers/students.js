import {
    DELETE_STUDENT_ACTION,
    SAVE_STUDENT_ACTION,
    SEARCH_STUDENT_ACTION
} from '../actions/students';
import { DELETE_GROUP_ACTION } from '../actions/groups';

const initialState = {
    list: [...Array(10).keys()].map(i => ({
        id: i,
        groupId: i,
        name: `Student ${i}`
    })),
    search: ''
};

function updateStudent(list, student) {
    return list.map(item => (item.id === student.id ? student : item));
}

function createStudent(list, student) {
    student.id = Date.now();

    return [...list, student];
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case DELETE_STUDENT_ACTION:
            return {
                ...state,
                list: state.list.filter(item => item.id !== payload)
            };

        case SAVE_STUDENT_ACTION:
            return {
                ...state,
                list: payload.id
                    ? updateStudent(state.list, payload)
                    : createStudent(state.list, payload)
            };

        case SEARCH_STUDENT_ACTION:
            return {
                ...state,
                search: payload
            };

        case DELETE_GROUP_ACTION:
            return {
                ...state,
                list: state.list.filter(item => item.groupId !== payload)
            };
        default:
            return state;
    }
};
