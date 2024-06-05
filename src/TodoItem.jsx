import CheckMarkIcon from "./CheckMarkIcon";
import CloseIcon from './CloseIcon';

const TodoItem = ({ text, isCompleted,onComplete, onDelete }) => {
  return (
    <li className={`Todo ${isCompleted && "Todo-checked"}`}>
      <span className="Icon CheckIcon" onClick={onComplete}><CheckMarkIcon /></span>
      <p>{ text }</p>
      <span className="Icon CloseIcon" onClick={onDelete}><CloseIcon /></span>
    </li>
  );
}

export { TodoItem };