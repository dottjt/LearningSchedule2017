import { createStore } from 'redux';
import super_reducer from './super_reducer';

const initialStore = {
  cycles: [
    {
      cycle_title: "Let's be awesome!",
      cycle_tags: [{ id: 1, text: "#yolo" }, {id: 2, text: "#sample" }],
      cycle_id: "251212323"
    },
    {
      cycle_title: "Broken Dog",
      cycle_tags: [{ id: 1, text: "#timmothy" }, {id: 2, text: "#keen-ey" }],
      cycle_id: "253323"

    }
  ]
}

let store = createStore(super_reducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;





