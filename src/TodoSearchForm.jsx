import { useState } from "react";

const TodoSearchForm = () => { 
  const [searchValue, setSearchValue] = useState('');

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