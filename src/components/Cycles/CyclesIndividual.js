import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { WithContext as ReactTags } from 'react-tag-input';


class ItemsIndividual extends Component {

    constructor(props) {
        super(props)

        let tag_state = this.props.cycle_tags; 
        this.state = {
            tags: tag_state,
            suggestions: ["Banana", "Mango", "Pear", "Apricot"]
        }   

        this.handleDelete = this.handleDelete.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }

    handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
        this.props.updateTags(this.props.cycle_id, tags);
    }

    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: "#" + tag
        });
        this.setState({tags: tags});
        console.log(tags);
        /* our redux handler */
        this.props.updateTags(this.props.cycle_id, tags);
    }

    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;
 
        // mutate array 
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);
 
        // re-render 
        this.setState({ tags: tags });
    }

    render() {

        return (
        <div className="">
            <form onSubmit={this.props.handleSubmit}>

                <div className="ci-cycle-title">
                    <Field className="ci-cycle-title-input" name="cycle_title" component="input" type="text" placeholder="Give me a name!" />
                </div>    
            </form>
                <div className="ci-cycle-tags">
                    <ReactTags  
                        tags={this.state.tags}
                        handleDelete={this.handleDelete}
                        handleAddition={this.handleAddition}
                        handleDrag={this.handleDrag} 
                        />
                </div>

        </div>
        )
    }
}





/*
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
 */
 
ItemsIndividual = reduxForm({})(ItemsIndividual);

export default ItemsIndividual;