import { TodoIcon } from "./TodoIcon";

const TodoCreateButton = ({children}) => {
  return <button className='Icon Icon-add' onClick={(event) => {
    console.log("clicked")
  }}> <TodoIcon type="plus"/> { children }</button>
}

export { TodoCreateButton };
