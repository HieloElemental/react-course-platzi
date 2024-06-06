import { TodoCreateButton } from "../TodoCreateButton";
import { TodoIcon } from "../TodoIcon";

import "./index.css"

const TodoAddForm = ({className}) => {
  return (
    <div className={`TodoForm TodoAddForm ${className}`}>
      <div>
        <h1>Add Todo</h1>
        <label htmlFor="">
          TaskName:
        </label>
        <input type="text" placeholder="Cut Carrots" />
        <TodoCreateButton>Add Todo</TodoCreateButton>
        <TodoIcon type="close"/>
      </div>
    </div>
  )
}

export { TodoAddForm };
