import { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearchForm } from './TodoSearchForm';
import { TodoAddForm } from './TodoAddForm';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoOpenAddFormButton } from './TodoOpenAddFormButton';

import './App.css';

const defaultTodos = [
  {
    id: 1,
    text: 'Cut Onions',
    completed: true
  },
  {
    id: 2,
    text: 'Cut Potatoes',
    completed: false
  },
  {
    id: 3,
    text: 'Cut Tomatoes',
    completed: false
  },
  {
    id: 4,
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

  const onCompleteHandler = (todoIndex) => {
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }

  const onDeleteHandler = (todoIndex) => {
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    newTodos.forEach((todo, i) => {
      newTodos[i].id = i;
    });
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <TodoAddForm className="responsiveForm" />

      <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      >
        <TodoSearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoAddForm />
      </TodoCounter>

      <TodoList>
        {
          filteredTodos.map(({ text, completed, id }, i) => (
            <TodoItem
              key={i}
              index={i}
              text={text}
              isCompleted={completed}
              onComplete={() => { onCompleteHandler(id) }}
              onDelete={() => { onDeleteHandler(id) }}
            />
          ))
        }
      </TodoList>
      <TodoOpenAddFormButton />
    </div>
  );
}

export default App;
