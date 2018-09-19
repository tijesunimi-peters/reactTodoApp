import React from 'react';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';


export default class Home extends React.Component {
  render() {
    return <div className="Home__wrapper">
      <div>Todo App</div>
      <div>
        <TodoForm />
      </div>
      <div>Todo List</div>
      <div>
        <TodoList />
      </div>
    </div>
  }
}