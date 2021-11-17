import { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../../redux/todo-redux/todo-actions';
import s from './todoForm.module.css'

 class TodoForm extends Component{
    state = {
    text: ''
    }
    
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.add(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
           
            <form className={s.container}onSubmit={this.handleSubmit}>
                 
                <input type="text" name="text" value={ this.state.text} onChange={this.handleChange} />
        <button type="submit" style={{marginTop: '15px'}}>save</button>
      
                </form>
               
    )}
}

const mapDispatchToProps = dispatch => ({
    add: (text)=>dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(TodoForm)