import { ADD_CYCLE, REMOVE_CYCLE } from './cycle_actions';
import uuid from 'node-uuid';


export function cycles(state= [], action) {
    switch(action.type) {

        case ADD_CYCLE:
            return [
                ...state,
                {
                    id: uuid(),
                    cycle_name: action.cycle_name
                }
            ]

        case REMOVE_CYCLE:
            return [
                ...state,
                {
                    
                }
            ]

        default:
            return state
            
    } // end of switch statement
} // end of cycles function 
