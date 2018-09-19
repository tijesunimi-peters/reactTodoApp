import { createStore, combineReducers } from 'redux';
import todos from '../components/TodoForm/Reducer';

const reducers = combineReducers({todos})

export default createStore(reducers);
