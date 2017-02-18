import { ADD_CYCLE, REMOVE_CYCLE, UPDATE_CYCLE, UPDATE_TAGS } from './cycle_actions';
import uuid from 'uuid';

/*


const initialStore = {
  cycles: [
    {
      cycle_title: "Let's be awesome!",
      cycle_tags: [{ id:0, text: "#yolo" }, {id: 1, text: "#sample" }],
      cycle_id: "251212323"
    },
    {
      cycle_title: "Broken Dog",
      cycle_tags: [{ id:0, text: "#there" }, {id: 1, text: "#seems" }],
      cycle_id: "2523"
    }
  ]
}

*/

export function cycles(state= [], action) {
    switch(action.type) {

        case ADD_CYCLE:
            return [
                ...state,
                {
                    cycle_title: "",
                    cycle_id: uuid().toString()
                }
            ]

        case UPDATE_CYCLE: 
            return state.map((cycle) => {
                if (cycle.cycle_id === action.cycle_id) {
                    return Object.assign({}, cycle, {
                    cycle: {
                        cycle_title: action.cycle_title,
                    }
                })
            }
            return cycle

            })

        case UPDATE_TAGS:
            return state.map((cycle) => {
                if (cycle.cycle_id === action.cycle_id) {
                    return Object.assign({}, cycle, {
                    cycle: {
                        cycle_tags: action.cycle_tags
                    }
                })
            }
            return cycle

            })
/*
        case REMOVE_TAGS:
            return state.filter(cycle => {
                if(cycle.cycle_id !== action.cycle_id) {

                }
 )
                cycle.filter
*/


        case REMOVE_CYCLE:
            return state.filter(cycle => cycle.cycle_id !== action.cycle_id);

        default:
            return state
            
    } // end of switch statement
} // end of cycles function 
