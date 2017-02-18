export const ADD_CYCLE = 'ADD_CYCLE';

export const REMOVE_CYCLE = 'REMOVE_CYCLE';


export function addCycle(cycle_name) {
    return {
        type: ADD_CYCLE,
        cycle_name
    }
}

export function removeCycle() {
    return {
        type: ADD_CYCLE
    }
}
