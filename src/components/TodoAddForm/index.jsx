import { useContext, useState } from "react";

import { TodoCreateButton } from "../TodoCreateButton";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoIcon } from "../TodoIcon";

import "./index.css"

const TodoAddForm = ({ className }) => {
  const { setIsTodoModalOpen, onAddHandler } = useContext(TodoContext);
  const [newTodoText, setNewTodoText] = useState("");

  const onCloseHandler = () => {
    setIsTodoModalOpen(false);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onAddHandler(newTodoText);
    setIsTodoModalOpen(false);
  }

  const onInputChangeHandler = (event) => {
    setNewTodoText(event.target.value);
  }

  return (
    <div className={`TodoForm TodoAddForm ${className}`}>
      <div>
        <h1>Add Todo</h1>
        <label htmlFor="">
          TaskName:
        </label>
        <input value={newTodoText} onChange={onInputChangeHandler} type="text" placeholder="Cut Carrots" />
        <TodoCreateButton onClick={onSubmitHandler}>Add Todo</TodoCreateButton>
        <TodoIcon type="close" onClick={onCloseHandler}/>
      </div>
    </div>
  )
}

export { TodoAddForm };
