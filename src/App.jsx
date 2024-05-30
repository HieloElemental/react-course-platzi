import { TodoCounter } from './TodoCounter';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';
import './App.css';

const App = () => {
  return (
    <div className="App">
       
      <TodoCounter />
      <TodoForm />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <TodoCreateButton />
    </div>
  );
}

export default App;
