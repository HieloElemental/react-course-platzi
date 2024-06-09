import { useContext } from "react";

import { TodoContext } from "../../contexts/TodoContext";
import { TodoIcon } from "../TodoIcon"

const TodoOpenAddFormButton = () => {
  const { setIsTodoModalOpen } = useContext(TodoContext);

  const onClickHandler = () => {
    setIsTodoModalOpen(true);
  }
  
  return (
    <button className='Icon Button' onClick={onClickHandler}>
      <TodoIcon type="plus" />
    </button>
  )
}

export { TodoOpenAddFormButton } 
