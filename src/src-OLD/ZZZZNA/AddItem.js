import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './item.css';


let AddItem = ({ handleSubmit, reset }) => {

    return (
        <div>
            <form className="add-item-form" onSubmit={handleSubmit}>
                <div>
                <Field name="item_type" component="select">
                    <option></option>
                    <option value="Book">Book</option>
                    <option value="Online Course">Online Course</option>
                    <option value="Lecture">Lecture</option>
                    <option value="Podcast">Podcast</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Project">Project</option>
                    <option value="Article">Article</option>
                    <option value="Lecture">Lecture</option>
                    <option value="University">University</option>                    
                </Field>
                </div>

                <div>
                    <Field className="add-item-field" name="item_title" component="input" type="text" placeholder="Learning Resource"/>
                </div>
                <div>
                    <Field className="add-item-field" name="item_cost" component="input" type="text" placeholder="Resource Cost"/>
                </div>
                <div>
                    <Field className="add-item-field" name="item_source" component="input" type="text" placeholder="Resource Link"/>
                </div>
                <div>
                    <Field className="add-item-field" name="item_start_date" component="input" type="text" placeholder="Start Date"/>
                </div>
                <div>
                    <Field className="add-item-field" name="item_end_date" component="input" type="text" placeholder="End Date"/>
                </div>
                
                    <button type="submit">Submit</button>
            </form>

        </div>
    )
}

AddItem = reduxForm({
  form: 'contact' +  // a unique name for this form
})(AddItem);

export default AddItem;

