import { combineReducers } from "redux";

const todoReduser = (state = [], action) => {
    switch (action.type) {
        case 'todo/add':
            return [...state, action.payload]
        
        case 'todo/delete':
            return state.filter(todo => todo.id !== action.payload)
        
        case 'todo/complited':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        complited: !todo.complited
                } } return todo
            })
        
        default: return state
    }
};

const filterRed = (state = '', action) => {
    switch (action.type) {
        case 'todo/filter':
            return action.payload
        
        default: return state
    }
}



const todoRed = combineReducers({
    todos: todoReduser,
    filter: filterRed
})

export default todoRed
