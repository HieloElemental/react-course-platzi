const TodoCounter = ({ completedTodos, totalTodos}) => { 
  return (
    <h1>
      { completedTodos } of { totalTodos } TODOS Completed
    </h1>
  )
}

export { TodoCounter };