import React from 'react';
import { connect } from 'react-redux';
import AddItem from '../Components/AddItem';
import { addItem } from '../redux/modules/actions';

let ContactForm = ({ dispatch }) => {


    let whenClicked = () => {

    }

    let createNewItem = () => {
    // var newElement createNew AddItem
    // var newItem = create <AddItem> to the mix. 
    // give it className = "item-list"
    // give it a unique ID number + a few object parametres. 
    // dispatch(newItem)
    // append element to the list.
    
    }

    let handleSubmit = (v) => {
        // find id of particular contact thing, then UPDATE
      // Do something with the form values
        console.log(v);
    }

    return (
      <div>
       <button className="new-item" onClick="{}">
            Add New Item
       </button>
       
       <div className="item-list">
          <AddItem onSubmit={handleSubmit} onClick="whenSelected" />
       </div>
      </div>
    );
}


ContactForm = connect()(ContactForm);


export default ContactForm;
