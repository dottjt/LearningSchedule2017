import React from 'react';
import { connect } from 'react-redux';

let Items_LeftSideBar = ({ items }) => {

    return (
    <div className="app-left-sidebar">   
        <button>
            <p>Items by date</p>
        </button>

        <button>
            <p>Items by completion</p>
        </button>

        <div>     
            <ul className="bye-bullet">
                {items.map(item => 
                    <div className="item-left-sidebar" key={item.item_id}>
                        <p>{item.item_title}</p>
                    </div>
                )}
            </ul>
        </div>
    </div>
    )
    
}

//

// need to figure out how to filter by date. 

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

Items_LeftSideBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Items_LeftSideBar);

export default Items_LeftSideBar;

