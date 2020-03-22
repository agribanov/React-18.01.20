import api from '../../services/api';

export const DELETE_WAITER_ACTION = 'DELETE_WAITER_ACTION';
function deleteWaiterFromStore(id) {
    return {
        type: DELETE_WAITER_ACTION,
        payload: id
    };
}

export const UPDATE_WAITER_ACTION = 'UPDATE_WAITER_ACTION';
function updateWaiterInStore(waiter) {
    return {
        type: UPDATE_WAITER_ACTION,
        payload: waiter
    };
}

export const CREATE_WAITER_ACTION = 'CREATE_WAITER_ACTION';
function createWaiterInStore(waiter) {
    return {
        type: CREATE_WAITER_ACTION,
        payload: waiter
    };
}

export const SEARCH_WAITER_ACTION = 'SEARCH_WAITER_ACTION';
export function searchWaiter(query) {
    return {
        type: SEARCH_WAITER_ACTION,
        payload: query
    };
}

export const CHANGE_WAITERS_REQUESTS_COUNT_ACTION =
    'CHANGE_WAITERS_REQUESTS_COUNT_ACTION';
export function startWaiterRequest() {
    return {
        type: CHANGE_WAITERS_REQUESTS_COUNT_ACTION,
        payload: +1
    };
}
export function stopWaiterRequest() {
    return {
        type: CHANGE_WAITERS_REQUESTS_COUNT_ACTION,
        payload: -1
    };
}

export const SET_WAITERS_ACTION = 'SET_WAITERS_ACTION';
export function setWaiters(data) {
    return {
        type: SET_WAITERS_ACTION,
        payload: data
    };
}

export const getWaiters = () => async dispatch => {
    dispatch(startWaiterRequest());

    const resp = await api.get('waiters');

    dispatch(setWaiters(resp.data));
    dispatch(stopWaiterRequest());
};

export const saveWaiter = waiter => async dispatch => {
    dispatch(startWaiterRequest());

    if (waiter.id) {
        const resp = await api.put(`waiters/${waiter.id}`, waiter);
        dispatch(updateWaiterInStore(resp.data));
    } else {
        const resp = await api.post(`waiters`, waiter);
        dispatch(createWaiterInStore(resp.data));
    }

    dispatch(stopWaiterRequest());
};

export const deleteWaiter = id => async dispatch => {
    dispatch(startWaiterRequest());

    await api.delete(`waiters/${id}`);
    dispatch(deleteWaiterFromStore(id));

    dispatch(stopWaiterRequest());
};
