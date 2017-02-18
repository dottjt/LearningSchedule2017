import React from 'react';
import { connect } from 'react-redux';
import { updateItem } from './arcss/item_actions';
import { Field, FieldArray, reduxForm } from 'redux-form'

const RenderComments = ({ fields }) => (
  <ul className="bye-bullet">
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Comment</button>
    </li>
    {fields.map((comment, index) =>
      <li key={index}>
        <Field
          name={`${comment}.comment`}
          type="text"
          component="input"
          label="comment"/>
      </li>
    )}
  </ul>
)

let Items_RightSideBar = ({ handleSubmit, items, updateItem }) => {
  
    return (
        <div className="app-right-sidebar">
            <form className="add-item-form" onSubmit={handleSubmit}>           
                <div>
                    <Field className="add-item-field" name="item_cost" component="input" type="text" placeholder="Resource Cost"/>
                </div>
                <div>
                    <Field className="add-item-field" name="item_source" component="input" type="text" placeholder="Resource Link"/>
                </div>
                <div>
                    <Field className="add-item-field" name="item_start_date" component="input" type="date" placeholder="Start Date"/>
                </div>
                <div>
                    <Field className="add-item-field" name="item_end_date" component="input" type="date" placeholder="End Date"/>
                </div>
                <div /*style={{display: 'none'}}*/>
                    <Field className="add-item-field" name="item_id" component="input" type="date" placeholder="item_id" />
                </div>
                
                <div>
                    <FieldArray name="item_comments" component={RenderComments}/>
                </div>
            </form>
        </div>
    )

}

Items_RightSideBar = reduxForm({})(Items_RightSideBar);


const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateItem: (item_type, item_title, item_cost, item_source, item_start_date, item_end_date) => {
            dispatch(updateItem(item_type, item_title, item_cost, item_source, item_start_date, item_end_date))
        }
    }
}

Items_RightSideBar = connect( 
    mapStateToProps,
    mapDispatchToProps
)(Items_RightSideBar)


export default Items_RightSideBar;


