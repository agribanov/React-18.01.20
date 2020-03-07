export const DELETE_STUDENT_ACTION = 'DELETE_STUDENT_ACTION';
export function deleteStudent(id) {
    return {
        type: DELETE_STUDENT_ACTION,
        payload: id
    };
}

export const SAVE_STUDENT_ACTION = 'SAVE_STUDENT_ACTION';
export function saveStudent(student) {
    return {
        type: SAVE_STUDENT_ACTION,
        payload: student
    };
}

export const SEARCH_STUDENT_ACTION = 'SEARCH_STUDENT_ACTION';
export function searchStudent(query) {
    return {
        type: SEARCH_STUDENT_ACTION,
        payload: query
    };
}
