import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterRed from './counter-redux/counter-reduser';
import todoRed from './todo-redux/todo-reduser';


const rootReduser = combineReducers({
    counter: counterRed,
     taski: todoRed
})


const store = createStore(rootReduser,  composeWithDevTools() );

export default store;