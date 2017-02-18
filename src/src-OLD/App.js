import React from 'react';
import Items_Container from './Items/Items_Container';
import Cycles_Container from './Cycles/Cycles_Container';
import { RelativeFragment as Fragment } from 'redux-little-router';
import './arcss/reset.css';
import './arcss/app.css';

let App = () => (
    
        <Fragment forRoute='/'>  

            <Fragment forRoute='/user/cycles/'>
                <Cycles_Container/>
            </Fragment>

            <Fragment forRoute='/user/items'>
                <Items_Container/>
            </Fragment>

        </Fragment>
)

export default App;