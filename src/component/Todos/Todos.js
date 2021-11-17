import React from 'react';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
import Filter from './Filter/Filter'


const Todos = () => (
    <div>
        <TodoForm />
        <Filter />
        <TodoList />
    </div>
);

export default Todos