/*

    GOVERNED BY USER ACTION

*/

// select an item to display

export const SELECT_CYCLE = 'SELECT_CYCLE'

export function selectCycle(cycle) {
    return {
      type: SELECT_CYCLE,
      cycle
  } 
}

// refresh button to update it. 

export const INVALIDATE_CYCLE = 'INVALIDATE_CYCLE'

export function invalidateCycle(cycle) {
    return {
      type: INVALIDATE_CYCLE,
      cycle
  } 
}


/*

    GOVERNED BY NETWORK REQUEST

*/


// when it's time to fetch Items, we use this.

export const REQUEST_ITEMS = 'REQUEST_ITEMS'

export function requestItems(cycle) {
    return {
      type: REQUEST_ITEMS,
      cycle
  } 
}



export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'

export function receiveItems(cycle, json) {
  return {
    type: RECEIVE_ITEMS,
    cycle,
    items: json.data.children.map(child => child.data),
    receivedAt: Date.now()
    } 
}

function fetchPosts(cycle) {
  return function (dispatch) {

    dispatch(requestItems(cycle));


    return fetch(`https://www.reddit.com/r/${cycle}.json`)
      
      .then(response => response.json())
      
      .then(json =>
      
        dispatch(receivePosts(cycle, json))
      )
  }

}

function shouldFetchPosts(state, cycle) {
  const items = state.postsByCycle[cycle]
    if (!items) {
      return true
    } else if (items.isFetching) {
      return false
    } else {
      return items.didInvalidate
    }
}


/*

    REDUCERS FOR ITEM_ASYNC_ACTIONS

*/

import { combinedReducers } from 'redux';

function selectedCycle(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_CYCLE:
      return action.cycle
    default:
      return state
    } 
}

let defaultItemsState = {
  isFetching: false,
  didInvalidate: false,
  items: []
}


function items(defaultItemsState, action) {
  switch (action.type) {
    case INVALIDATE_CYCLE:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_ITEMS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_ITEMS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.items,        // this could be a cause of issue! 
        lastUpdated: action.receivedAt
      }) 
    default:
      return state
  }
}

function postsByCycle(state = {}, action) {
    switch (action.type) {
      case INVALIDATE_CYCLE:
      case RECEIVE_ITEMS:
      case REQUEST_ITEMS:
        return Object.assign({}, state, {
          [action.cycle]: items(state[action.cycle], action)
    })
      default:
        return state
  }
}

const rootReducer = combineReducers({
  postsByCycle,
  selectedCycle
});

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
// import { selectSubreddit, fetchPosts } from './actions'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

store.dispatch(selectSubreddit('reactjs'))
store.dispatch(fetchPosts('reactjs')).then(() =>
  console.log(store.getState())
)

