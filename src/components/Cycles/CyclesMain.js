import React from 'react';
import CyclesIndividual from './CyclesIndividual';

let CyclesMain = ({ cycles, addCycle, removeCycle, updateCycle, updateTags }) => {

    let handleSubmit = (values) => {
        values.preventDefault();
        let {cycle_id, cycle_title} = values;
        updateCycle(cycle_id, cycle_title);
    }
    
/*  JUST IN CASE REDUX ISN'T WORKING FOR TAGS 

    let updateTagsFn = (values) => {
        let {cycle_id, cycle_tags} = values;
        updateTags(cycle_id, cycle_tags);
    }
*/

    return (
        <div className="cm-container pure-u-md-18-24">

                <div className="cm-add-new-cycle">
                    <input className="cm-add-new-cycle-title" onClick={addCycle} placeholder="Add New Cycle"/>
                </div>

                {cycles.map(cycle => 
                    <div key={cycle.cycle_id} className="ci-container"> 
                        <button className="cm-remove-cycle" onClick={() => removeCycle(cycle.cycle_id)}>
                            Rem 
                        </button>
                        <CyclesIndividual
                            form={cycle.cycle_id} 
                            initialValues={cycle}

                            /* for updating tags */
                            cycle_id={cycle.cycle_id}
                            cycle_tags={cycle.cycle_tags}
                            updateTags={updateTags}

                            {...cycles} 
                            onSubmit={() => handleSubmit}
                            />
                    </div>                    
                )}
        </div>
    )
}


/*************************************************

            START OF CONTAINER 

**************************************************/

import { addCycle, updateCycle, removeCycle, updateTags } from './arcss/cycle_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        cycles: state.cycles
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCycle: () => dispatch(addCycle()),
        updateCycle: (cycle_id, cycle_title) => dispatch(updateCycle(cycle_id, cycle_title)),
        updateTags: (cycle_id, cycle_tags) => dispatch((updateTags(cycle_id, cycle_tags))),
        removeCycle: (cycle_id) => dispatch((removeCycle(cycle_id)))
    }
}

CyclesMain = connect( 
    mapStateToProps,
    mapDispatchToProps
)(CyclesMain);

export default CyclesMain;

