import { visibilityFilter, items, itemSelected} from '../Items/arcss/item_reducers';


import { cycles } from '../Cycles/arcss/cycle_reducers';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';



const reducersList = {
  itemSelected: itemSelected,
  visibilityFilter: visibilityFilter,
  items: items,
  form: formReducer,
  cycles: cycles
}

let super_reducer = combineReducers(reducersList);

export default super_reducer;
