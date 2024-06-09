import { useContext } from "react";

import { TodoContext } from "../../contexts/TodoContext";

const TodoSearchForm = () => { 
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <div className="TodoForm">
      <label htmlFor="">Search:</label>
      <input placeholder="Cut Onions" value={searchValue} onChange={(event) => {
        setSearchValue(event.target.value);
      }} />
    </div>
  )
}

export { TodoSearchForm };