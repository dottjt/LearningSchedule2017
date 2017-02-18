export const CREATE_ITEM = 'CREATE_ITEM';

function items(state = [], action) {
  switch(action.type) {

    case CREATE_ITEM:
        return [
            ...state,


        ]
        {
          item_type: action.item_type,
          item_title: action.item_title,
          item_cost: action.item_cost,
          item_source: action.item_source,
          item_start_date: action.item_start_date,
          item_end_date: action.item_end_date,
          selected: false 
        }
      ]


  }