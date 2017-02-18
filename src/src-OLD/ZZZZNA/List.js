import React from 'react';
import Item from './Item';

let List = ({ items, onItemClick, addItem, updateItem }) => {
    
    let handleSubmit = (values) => {

        let {item_type, item_title, item_cost, item_source, item_start_date, item_end_date} = values;

        updateItem(item_type, item_title, item_cost, item_source, item_start_date, item_end_date);

        // how do I update withe the id from the form? 
        // ohhhh, okay. I need to learn to initialize the form first! 

        console.log(values);

    }

    return (
        <div>
            <button className="new-item" onClick={addItem}>
                Add New Item
            </button>

            <div className="main-schedule-list">
                <ul className="bye-bullet">
                    {items.map(item => 
                        <Item 
                            key={item.id} 
                            form={item.id} 
                            {...item} 
                            onSubmit={handleSubmit}
                            // onClick={() => onItemClick(item.id)}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}


// ahhhh, so onClick is actually just what has been pass on as a prop to Item.js



export default List;
