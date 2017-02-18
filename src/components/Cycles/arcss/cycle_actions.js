export const ADD_CYCLE = 'ADD_CYCLE';

export const REMOVE_CYCLE = 'REMOVE_CYCLE';

export const UPDATE_CYCLE = 'UPDATE_CYCLE';

export const UPDATE_TAGS = 'UPDATE_TAGS';

export const REMOVE_TAGS = 'REMOVE_TAGS';


export function addCycle() {
    return {
        type: ADD_CYCLE
    }
}

export function updateCycle(cycle_id, cycle_title) {
    return {
        type: UPDATE_CYCLE,
        cycle_id,
        cycle_title
    }
}

export function updateTags(cycle_id, cycle_tags) {
    return {
        type: UPDATE_TAGS,
        cycle_id,
        cycle_tags
    }
}
/*

export function removeTags(cycle_id) {
    return {
        type: REMOVE_TAGS,
        cycle_id
    }
}

*/

export function removeCycle(cycle_id) {
    return {
        type: REMOVE_CYCLE,
        cycle_id
    }
}
