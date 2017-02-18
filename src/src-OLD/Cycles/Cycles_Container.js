import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'redux-little-router';
import { addCycle } from './arcss/cycle_actions';
import './arcss/cycle.css';


let Cycles_Main = ({ cycles }) => (
        <div>
            <h2 className="cycles-main-cycle_title"> My Cycles</h2> 
                <div className="cycles">
                    <h1>+ Create new cycle</h1>
                </div>
            {cycles.map(cycle => 
                <div key={cycle.id} className="cycles"> 
                    <div>
                         <h1 className="cycles-cycle-title">{cycle.cycle_name}</h1>
                         <Link href={cycle.cycle_name}/>
                    </div>
                </div>                    
            )
        }
        </div>
)


let Cycles_LeftSideBar = () => {
    return (
        <div className="app-left-sidebar">
            <h2 className="cycles-left-sidebar-title">Learning Schedule</h2>
            <h3 className="cycles-getting-started">Getting Started</h3>
            <ul className="bye-bullet">
                <li className="cycles-left-sidebar-list">
                    1. Create your first cycle
                </li>
                <li className="cycles-left-sidebar-list">
                    2. Add your learning resources
                </li>
                <li className="cycles-left-sidebar-list">
                    3. Track your learning times
                </li>
                <li className="cycles-left-sidebar-list">
                    4. Be amazing #YOLO
                </li>
            </ul>
            <h1>This is the left sidey</h1>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        cycles: state.cycles
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addCycle: (name) => dispatch(addCycle(name))
    }
}


Cycles_Main = connect( 
    mapStateToProps,
    mapDispatchToProps
)(Cycles_Main)


let Cycles_Container = () => {
    return (
        <div className="app-container">
            <Cycles_LeftSideBar/>
            <Cycles_Main/>
        </div>
    )
}


export default Cycles_Container;