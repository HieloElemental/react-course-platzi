import { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearchForm } from './TodoSearchForm';
import { TodoAddForm } from './TodoAddForm';
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
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter(todo => !!todo.text.toLowerCase().includes(searchValue.toLowerCase()));
  console.log(filteredTodos);

  return (
    <div className="App">
      <TodoAddForm />

      <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      >
        <TodoSearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoAddForm />
        <TodoCreateButton>Add Todo</TodoCreateButton>
      </TodoCounter>

      <TodoList>
        {filteredTodos.map(({ text, completed }, i) => <TodoItem key={i} text={text} isCompleted={completed} />) }
      </TodoList>
      <TodoCreateButton />
    </div>
  );
}

export default App;
