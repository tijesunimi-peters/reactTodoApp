import { CREATE, CHECK } from '../../constants';

const initialState = [];

export default (state = initialState, action) => {
  
  let todos = state;
  switch(action.type) {
    case CREATE:
      todos.push(action.todo);
      return Object.assign([], todos);
    case CHECK:
      todos = [...state];
      // let todo = todos.filter((_, index) => index === action.index)[0];
      // if(todo) { todo.checked = true; }
      // todos[index] = todo;
      return Object.assign([], todos);

    default: return state;
  }
}