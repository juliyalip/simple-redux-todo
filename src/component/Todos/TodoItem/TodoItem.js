import React from 'react';
import s from './todoItem.module.css'

const TodoItem = ({ text, complited, onDeleteTodo, onComplitedTodo }) => (
    <li className={s.container}>
        <p>{text}</p>
        <div>
        <input type="checkbox" checked={complited} onChange={onComplitedTodo} />
        <button type="button" onClick={onDeleteTodo}>delete</button>
        </div>
    </li>
);

export default TodoItem