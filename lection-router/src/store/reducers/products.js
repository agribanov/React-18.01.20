const initialState = {
    list: [],
    search: ''
};

export default function(state = initialState, { type, payload }) {
    console.log('reducer products', state);

    switch (type) {
        default:
            return state;
    }
}
