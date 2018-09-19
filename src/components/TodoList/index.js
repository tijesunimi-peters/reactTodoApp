import React from 'react';
import { connect } from 'react-redux';

const Todo = (props) => {
  return <div className='Todo'>
    <div>
      <span></span>
    </div>
    <div>{ props.todo.text }</div>
  </div>
}


class TodoList extends React.Component {
  render() {
    return <div>
      {this.props.todos.map(todo => <Todo todo={todo} /> )}
    </div>
  }
}

const stateToProps = (state) => ({...state});

export default connect(stateToProps)(TodoList);