import { cycles } from '../components/Cycles/arcss/cycle_reducers';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

const reducersList = {
  cycles: cycles,
  form: formReducer
}

let super_reducer = combineReducers(reducersList);

export default super_reducer;
