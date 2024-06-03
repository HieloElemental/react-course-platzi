const TodoList = ({ children }) => {
  return (
    <div className="TodoList">
      <h1>TODOS</h1>
      <ul>
        { children }
      </ul>
    </div>
  )
}

export { TodoList };
