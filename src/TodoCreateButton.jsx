import PlusIcon from './PlusIcon';

const TodoCreateButton = ({children}) => {
  return <button className='Icon Button'><span className='Icon PlusIcon'><PlusIcon /></span>{ children }</button>
}

export { TodoCreateButton };
