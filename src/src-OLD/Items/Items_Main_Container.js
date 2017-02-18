import { connect } from 'react-redux';
import { removeItem, toggleItem, addItem, updateItemMain, updateItem, setRightSideBar } from './arcss/item_actions';
import Items_Main from './Items_Main';

const getVisibleItems = (items, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return items
        case 'SHOW_COMPLETED':
            return items.filter(i => i.selected)
        case 'SHOW_ACTIVE':
            return items.filter(i => !i.selected)
        default:
            return items
    }
}

const getRightSideBarItem = (items, item_selected) => {
    switch(item_selected) {
        case 'SELECTED':
            return items.filter( i => i.id === item_selected.id )
        case 'NONE_SELECTED':
            return items    // maybe make this into a special parametre. 
        default:
            return items 
    }
}

const mapStateToProps = (state) => {
    return {
        items: getVisibleItems(state.items, state.visibilityFilter),
        rightSideItems: getRightSideBarItem(state.items, state.itemSelected),
        testObject: {
            item_id: "eb2da3d1-0a99-4d92-83b6-58560a3f4ce0",
            item_cost: 3033
        }
    }
}
// try and pass a normal object to test the props. 

const mapDispatchToProps = (dispatch) => {
    return {
        updateItem: (item_times_spent, item_id, item_comments, item_type, item_title, item_cost, item_source, item_start_date, item_end_date) => {
            dispatch(updateItem(item_times_spent, item_id, item_comments, item_type, item_title, item_cost, item_source, item_start_date, item_end_date))
        },
        onItemClick: (item_id) => {
            dispatch(toggleItem(item_id))
        },
        removeItem: (item_id) => {
            dispatch(removeItem(item_id))
        },
        addItem: () => {
            dispatch(addItem())
        },
        setRightSideBar: (item_id) => {
            dispatch() //
        },
        updateItemMain: (item_type, item_title, item_times_spent) => {
            dispatch(updateItemMain(item_type, item_title, item_times_spent))
        }
    }
}

let Items_Main_Container = connect( 
    mapStateToProps,
    mapDispatchToProps
)(Items_Main)

export default Items_Main_Container;

