import React from 'react';
import Items_FilterLink from './Items_FilterLink';
import Items_TopBar from './Items_TopBar';
import Items_LeftSideBar from './Items_LeftSideBar';
import Items_RightSideBar from './Items_RightSideBar';
import Items_Main_Container from './Items_Main_Container';

let Items_Container = () => {

    return (
        <div className="app-container">
            <Items_LeftSideBar/>
            <div className="app-LEFTSIDE">
                <Items_TopBar/>
                <Items_Main_Container/>
            </div>
        </div>
    )
    
}

export default Items_Container; 