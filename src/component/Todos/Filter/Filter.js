import React from 'react';
import { connect } from 'react-redux';
import {filterTodo} from '../../../redux/todo-redux/todo-actions'

const Filter = ({ value, onFilter }) => (
    <div>
        you find: 
        <input type="text" value={value} name="filter" onChange={onFilter} />
    </div>
);

const mapStateToProps = state => ({
    value: state.taski.filter
})

const mapDispatchToProps = dispatch => ({
    onFilter: (e)=> dispatch(filterTodo(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)