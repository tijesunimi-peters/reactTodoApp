import React from 'react';
import './TodoForm.css';
import { connect } from 'react-redux';
import { createTodo } from './Action';
import { bindActionCreators } from 'redux'

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    // linkup to the action
    let payload = {
      id: this.props.todos.length,
      text: this.state.todoText,
      checked: false
    }
    
    this.props.create(payload);
  }


  render() {
    return <div className="TodoForm__wrapper">
        <div className="TodoForm__input-wrapper">
          <input type="text" value={this.state.todoText} placeholder='Title' onChange={this.handleChange} name='todoText' />
        </div>
        <div className="button__wrapper">
          <button onClick={this.handleSubmit}>Save</button>
        </div>
    </div>
  }
}

const stateToProps = (state) => {
  return state;
}

const dispatchToProps = (dispatch) => {
  return {
    create: bindActionCreators(createTodo, dispatch)
  }
}

export default connect(stateToProps, dispatchToProps)(TodoForm);