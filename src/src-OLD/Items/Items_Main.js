import React from 'react';
import './arcss/item.css';
import Items_Individual from './Items_Individual';
import Items_RightSideBar from './Items_RightSideBar';


let Items_Main = ({ updateItem, updateItemMain, testObject, setRightSideBar, initialValues, items, onItemClick, addItem, removeItem }) => {
/*
    let handleSubmit = (values) => {

        let {item_type, item_title, item_times_spent, item_id } = values;

        updateItemMain(item_type, item_title, item_times_spent, item_id);

        console.log(values);
    }
*/
    let handleSubmit = (values) => {

        let {item_times_spent, item_id, item_comments, item_type, item_title, item_cost, item_source, item_start_date, item_end_date} = values;

        console.log(item_title);
        updateItem(item_times_spent, item_id, item_comments, item_type, item_title, item_cost, item_source, item_start_date, item_end_date);

        console.log(values);
    }

    let onItemClickRightSideBar = () => {

        // redux and action.

    }


    return (
        <div className="app-main-container">
            <div className="app-main">
                
                <div className="app-main-new-item-bar">
                    <button className="add-new-item" onClick={addItem}>
                        New Item
                    </button>
                </div>
                
                    {items.map(item => 
                        <div key={item.item_id}>   

                            <Items_Individual 
                                form={item.item_id} 
                                initialValues={item}
                                {...item} 
                                onSubmit={handleSubmit}
                                onClick={() => removeItem(item.item_id)}
                                // onClick={() => onItemClick(item.item_id)}  
                            />
                        </div>      
                    )}
            </div> 
            
            <div className="app-right-sidebar">
                        <Items_RightSideBar
                            form={testObject.item_id}
                            initialValues={testObject}
                        />
            </div>

        </div>
    )
}

export default Items_Main;

// ahhhh, so onClick is actually just what has been pass on as a prop to Item.js