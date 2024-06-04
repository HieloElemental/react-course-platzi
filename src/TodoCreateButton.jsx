import PlusIcon from './PlusIcon';

const TodoCreateButton = ({children}) => {
  return <button className='Icon AddIcon' onClick={(event) => {
    console.log("clicked")
  }}><span className='Icon PlusIcon'><PlusIcon /></span>{ children }</button>
}

export { TodoCreateButton };
