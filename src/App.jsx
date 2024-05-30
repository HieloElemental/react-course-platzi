import { TodoCounter } from './TodoCounter';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';
import './App.css';

const defaultTodos = [
  {
    text: 'Cut Onions',
    completed: true
  },
  {
    text: 'Cut Potatoes',
    completed: false
  },
  {
    text: 'Cut Tomatoes',
    completed: false
  },
  {
    text: 'Cut Carrots',
    completed: false
  }
]

const App = () => {
  return (
    <>
       
      <TodoCounter completedTodos={3} totalTodos={5}/>
      <TodoForm />

      <TodoList>
        {defaultTodos.map(({ text, completed }, i) => <TodoItem key={i} text={text} isCompleted={completed} />) }
      </TodoList>

      <TodoCreateButton />
    </>
  );
}

export default App;
