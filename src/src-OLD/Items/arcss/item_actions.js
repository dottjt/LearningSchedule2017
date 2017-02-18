/*
    Action types 
*/

export const ADD_ITEM = 'ADD_ITEM';

export const UPDATE_ITEM = 'UPDATE_ITEM';

export const UPDATE_ITEM_MAIN = 'UPDATE_ITEM_MAIN';

export const REMOVE_ITEM = 'REMOVE_ITEM';

export const TOGGLE_ITEM = 'TOGGLE_ITEM';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const SET_RIGHT_SIDEBAR = 'SET_RIGHT_SIDEBAR'; 



/*
    Other constants
*/

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_SELECTED: 'SHOW_SELECTED',
    SHOW_ACTICE: 'SHOW_ACTIVE'
}

export const ItemsSelected = {
    NONE_SELECTED: 'NONE_SELECTED', // show EVERYTHING. 
    SELECTED: 'SELECTED'
}

/*
    Action creators
*/


export function setRightSideBar(item_id) {
    return {
        type: SET_RIGHT_SIDEBAR,
        item_id
    }
}

export function removeItem(item_id) { 
    return {
        type: REMOVE_ITEM, 
        item_id
    }
}

export function addItem() {
    return {
        type: ADD_ITEM
    }
}

export function updateItem(item_times_spent, item_id, item_comments, item_type, item_title, item_cost, item_source, item_start_date, item_end_date) {
    return {
        type: UPDATE_ITEM,
        item_times_spent, 
        item_id, 
        item_comments, 
        item_type, 
        item_title, 
        item_cost, 
        item_source, 
        item_start_date, 
        item_end_date
    }
}

export function updateItemMain(item_type, item_title, item_times_spent, item_id) {
    return {
        type: UPDATE_ITEM_MAIN,
        item_id,
        item_type,
        item_title,
        item_times_spent
    }
}

export function toggleItem(item_id) {
    return {
        type: TOGGLE_ITEM,
        item_id 
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}