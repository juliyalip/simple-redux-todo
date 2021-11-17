import { combineReducers } from "redux";


const counterReduser = (state = 0, action) => {
    switch (action.type) {
        
        case 'todo/increment':
            return state + action.payload
        
        case 'todo/decrement':
            return state - action.payload
        
        default: return state
    }
};

const counterRed = combineReducers({
    value: counterReduser
})



export default counterRed