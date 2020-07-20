import types from '../actions/action-types';

const initialState = {
    min: 7,
    max: 30
};

export default (state = initialState, action) => {
    console.log(action, state);

    switch (action.type) {
        case types.NUM_MIN_CHANGED:
            return {
                ...state,
                min: action.payload
            }
        case types.NUM_MAX_CHANGED:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
};