import shortid from "shortid"

export const addTodo = text => ({
    type: 'todo/add',
    payload: {
        id: shortid.generate(),
        text,
        complited: false
    }
})

export const deleteTodo = todoId => ({
    type: 'todo/delete',
    payload: todoId
})


export const complitedTodo= todoId => ({
    type: 'todo/complited',
    payload: todoId
})

export const filterTodo = text => ({
    type: 'todo/filter',
    payload: text
})