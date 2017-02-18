import { UPDATE_ITEM_MAIN, SET_RIGHT_SIDEBAR, REMOVE_ITEM, ADD_ITEM, TOGGLE_ITEM, SET_VISIBILITY_FILTER, UPDATE_ITEM, CLICKED_ITEM, VisibilityFilters } from './item_actions';
import uuid from 'node-uuid';

// true is associated with DATE
// fasle is associated with TASK

export function itemSelected(state = true, action) {
  switch(action.type) {
    case SET_RIGHT_SIDEBAR:
      return action.item_id
    default:
      return state
  }
}

export function visibilityFilter(state = true, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export function items(state = [], action) {
  switch(action.type) {

    case UPDATE_ITEM:
      return state.map((item) => {
        if (item.item_id === action.item_id) {
            return Object.assign({}, item, {
              item_type: action.item_type,
              item_title: action.item_title,
              item_cost: action.item_cost,
              item_source: action.item_source,
              item_start_date: action.item_start_date,
              item_end_date: action.item_end_date,
              item_comments: action.item_comments,
              item_time_spent: action.item_times_spent
            })
        }
        return item
      })

    case UPDATE_ITEM_MAIN:
      return state.map((item) => {
          if (item.item_id === action.item_id) {
              return Object.assign({}, item, {
                item_type: action.item_type,
                item_title: action.item_title,
                item_times_spent: action.item_times_spent
            })
          }
          return item
      })

    case REMOVE_ITEM:
      return state.filter(item => { 
        if(item.item_id === action.item_id) {
              !item
        }
      return state
      })
         
// return state.filter(todo => todo.get('id') !== action.id);

    case CLICKED_ITEM: 
      return state.map((item) => {
        if (state.item_id === action.item_id) {
            return Object.assign({}, item, {
              clicked: !item.selected
            })
        }
        return item
      })
    
    case ADD_ITEM:
      return [
        ...state,
        {
          item_id: uuid(),
          item_type: "",
          item_title: "",
          item_cost: "",
          item_source: "",
          item_start_date: "",
          item_end_date: "",
          item_times_spent: [
            {
                item_time_spent_date: "",
                item_time_spent: ""
            }
          ],
          item_comments: [
            {
              item_comment: ""
            }
          ],
          selected: false 
        }
      ]

    case TOGGLE_ITEM:
      return state.map((item) => {
        if (state.item_id === action.item_id) {
            return Object.assign({}, item, {
              selected: !item.selected
            })
        }
        return item
      })

    default: 
      return state
  }
}


