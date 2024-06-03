const TodoSearchForm = () => { 
  return (
    <div className="TodoForm">
      <label htmlFor="">Search:</label>
      <input placeholder="Cut Onions" onChange={(event) => {
        console.log(event.target.value);
      }} />
    </div>
  )
}

export { TodoSearchForm };