export const increment = (value) => ({
    type: 'todo/increment',
    payload: value
});


export const decrement = (value) => ({
    type: 'todo/decrement',
    payload: value
})