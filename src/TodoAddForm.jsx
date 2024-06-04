import CloseIcon from "./CloseIcon";
import { TodoCreateButton } from "./TodoCreateButton";

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
        <span className="Icon CloseIcon"><CloseIcon /></span>
      </div>
    </div>
  )
}

export { TodoAddForm };
