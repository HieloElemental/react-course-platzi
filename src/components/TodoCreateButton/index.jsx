import { TodoIcon } from "../TodoIcon";

const TodoCreateButton = ({children, onClick}) => {
  return <button className='Icon Icon-add' onClick={onClick}> <TodoIcon type="plus"/> { children }</button>
}

export { TodoCreateButton };
