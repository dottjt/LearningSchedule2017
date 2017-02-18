import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';


/*

*/

const RenderTimeSpent = ({ fields }) => {

    return (
        <ul className="bye-bullet">
            {fields.map((timespent, index) =>
            <li key={index}>

                <div className="inline-item-field">
                    <Field
                        className="add-item-field"
                        name={`${timespent}.item_time_spent`}
                        type="text"
                        component="input"
                        label="item_time_spent"/>
                </div>

                <div className="inline-item-field">
                    <Field
                        className="add-item-field"
                        name={`${timespent}.item_time_spent_date`}
                        type="text"
                        component="input"
                        label="item_time_spent_date"/>
                 </div>
         
            </li>
            )}
        </ul>

    )
}


let Items_Individual = ({ removeItem, onClick, handleSubmit }) => {

    return (
     <div className="item-individual">

        <button type="submit" onClick={onClick}>Delete Item</button>

        <form onClick={onClick} onSubmit={handleSubmit}>

                <div className="inline-item-field">
                    <Field className="add-item-field" name="item_type" component="select">
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
    
                <div className="inline-item-field">
                    <Field className="add-item-field" name="item_title" component="input" type="text" placeholder="Learning Resource" />
                </div>

                <div className="inline-item-field">
                    <FieldArray className="add-item-field" name="item_times_spent" component={RenderTimeSpent}/>
                </div>

                <div className="inline-item-field">
                    <Field className="add-item-field" name="item_id" component="input" type="text" placeholder="Learning Resource" />
                </div>

            <button className="add-item-field" type="submit">Submit</button>

        </form>
    </div>
    )
}

//  
           

Items_Individual = reduxForm({})(Items_Individual);

export default Items_Individual;