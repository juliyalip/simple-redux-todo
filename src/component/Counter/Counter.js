import React from 'react';
import {connect} from 'react-redux'
import s from './counter.module.css';
import * as actionsConter from '../../redux/counter-redux/counter-action'

const Counter = ({ value, decrement, increment }) => (
    <div className={s.container}>
        <p>{value}</p>
        <button type="button" onClick={decrement}>decrement</button>
        <button type="button" onClick={increment}>increment</button>

    </div>
);

const mapStateToProps = state => ({
    value: state.counter.value
})

const mapDispatchToProps = dispatch => ({
    decrement: () => dispatch(actionsConter.decrement(1)),
    increment: ()=> dispatch(actionsConter.increment(1))
})


export default connect(mapStateToProps, mapDispatchToProps)( Counter)