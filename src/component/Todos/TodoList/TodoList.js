import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { connect } from 'react-redux'
import {deleteTodo, complitedTodo} from '../../../redux/todo-redux/todo-actions'
 
const TodoList = ({ items, onDelete, onComplited }) => (
    <ul>
        {items.length > 0 && items.map(({ id, text, complited }) => (
            <TodoItem key={id} text={text} complited={complited}
                onComplitedTodo={() => onComplited(id)} onDeleteTodo={() => onDelete(id)} />
        ))}
    </ul>
);

const mapStateToProps = state => {
    const { filter, todos } = state.taski;
    const visibleTodos = todos.filter(todo => todo.text.toLowerCase().includes(filter.toLowerCase()))
    return {
    items: visibleTodos}}


const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(deleteTodo(id)),
    onComplited: id => dispatch( complitedTodo(id))
  
})

export default connect(mapStateToProps, mapDispatchToProps)( TodoList)