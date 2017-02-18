import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from './arcss/item_actions';

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a href="#"
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

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

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);


/*
        FOOTER 
                    */

const Items_FilterLink = () => (
    <p>
        Show:
        {" "}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_COMPLETED">
            Active
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">
            Selected
        </FilterLink>
    </p>
)

export default Items_FilterLink;

