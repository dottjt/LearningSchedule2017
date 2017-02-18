import { compose, createStore, applyMiddleware } from 'redux';
import { routerForBrowser } from 'redux-little-router';
import super_reducer from './super_reducer';


const initialStore = {
            itemSelected: 'NONE_SELECTED',

            visibilityFilter: 'SHOW_ALL',
            
            cycles: [
              {
                id: "fr3tu3d1-0a99-4d92-83b6-58560a3f4ce0",
                cycle_name: "Clojure Programming Learning Cycle"

              }
            ],

            items: [
                      {
                      item_title: 'The book of sauron',
                      item_cost: 0,
                      item_source: 'http://brazzers.educational.com',
                      item_id: "eb2da3d1-0a99-4d92-83b6-58560a3f4ce0",
                      selected: false,
                      item_start_date: "010916",
                      item_end_date: "021017",
                      item_completed: false,
                      item_times_spent:
                        [ 
                            {
                                item_time_spent_date: 111134,
                                item_time_spent: 30
                            }
                        ],

                      item_comments: [
                        {
                          item_comment: "you have a great rack"
                        },
                        {
                          item_comment: "#yolo"
                        }
                  ] 
                     }
          ] 
}


const routes = {
    '/': {
      title: 'yolo',
      '/user': {
        title:'Profile',
        '/settings': { // /user/settings
          title: 'Profile Settings'
        }, 
        '/cycles': { // /user/cycles
          title: 'All Cycles',
          '/cycle': { // /user/cycles/cycle
            title: 'Inidividual Cycle'
          } 
        }, 
        '/items': { // /user/learninglist
          title: 'List Of All Learning Resources'
        } 
      } 
    } 
}


const {
  routerEnhancer,
  routerMiddleware  
} = routerForBrowser({
  // The configured routes. Required.
  routes
  // you can also create a base-name if you like! 
})


let store = createStore(super_reducer, initialStore, compose(routerEnhancer, applyMiddleware(routerMiddleware)
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;





