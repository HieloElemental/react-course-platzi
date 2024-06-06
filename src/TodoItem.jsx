
import { TodoIcon } from "./TodoIcon";

const TodoItem = ({ text, isCompleted, onComplete, onDelete }) => {
  return (
    <li className={`Todo ${isCompleted && "Todo-checked"}`}>
      <TodoIcon type="check" onClick={onComplete}/>
      <p>{ text }</p>
      <TodoIcon type="close" onClick={onDelete}/>
    </li>
  );
}

export { TodoItem };