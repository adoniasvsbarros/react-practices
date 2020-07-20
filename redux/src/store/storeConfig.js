import { createStore, combineReducers } from 'redux';
import numbersReducer from '../reducers/numbers.reducer';


const reducers = combineReducers({
    numbers: numbersReducer
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig