import CheckMarkIcon from "./CheckMarkIcon";
import CloseIcon from './CloseIcon';

const TodoItem = ({ text, isCompleted }) => {
  return (
    <li className={`Todo ${isCompleted && "Todo-checked"}`}>
      <span className="Icon CheckIcon"><CheckMarkIcon /></span>
      <p>{ text }</p>
      <span className="Icon CloseIcon"><CloseIcon /></span>
    </li>
  );
}

export { TodoItem };