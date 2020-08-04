export const getLocalTodos = () => {
  const data = localStorage.getItem("todos")
  return JSON.parse(data) || {}
}

export const setLocalTodos = (todos) => {
  const data = JSON.stringify(todos)
  localStorage.setItem("todos", data );
}
