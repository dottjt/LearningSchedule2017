import React from 'react';
import CyclesMain from './CyclesMain';
/* import CyclesLeftSideBar from './CyclesLeftSideBar'; */
import CyclesTopbar from './CyclesTopbar';
import './arcss/style.css';

const Cycles = () => {
    return (
        <div className="container pure-g">
            <CyclesTopbar/>
            <CyclesMain/>
            <div className="clear"></div>
        </div>
    )
}

export default Cycles;

