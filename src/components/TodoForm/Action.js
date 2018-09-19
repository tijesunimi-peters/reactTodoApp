export  const createTodo = (todo) => {
  return {
    type: 'CREATE',
    todo
  }
}

export const checkTodo = (todo) => {
  return {
    type: 'CHECK',
    todo
  }
}