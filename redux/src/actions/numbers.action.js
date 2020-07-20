import types from './action-types';

// Action creator 

export const changeMinimumNumber = newNumber => {
    return {
        type: types.NUM_MIN_CHANGED,
        payload: newNumber
    }
} 

export const changeMaximumNumber  = newNumber => {
    return {
        type: types.NUM_MAX_CHANGED,
        payload: newNumber
    }
}