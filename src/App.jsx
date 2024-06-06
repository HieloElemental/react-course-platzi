import { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearchForm } from './TodoSearchForm';
import { TodoAddForm } from './TodoAddForm';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoOpenAddFormButton } from './TodoOpenAddFormButton';

import './App.css';

/*
const defaultTodos = [
  {
    id: 0,
    text: 'Cut Onions',
    completed: true
  },
  {
    id: 1,
    text: 'Cut Potatoes',
    completed: false
  },
  {
    id: 2,
    text: 'Cut Tomatoes',
    completed: false
  },
  {
    id: 3,
    text: 'Cut Carrots',
    completed: false
  }
]

localStorage.setItem('TODO_SITE_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TODO_SITE_V1');
*/

const App = () => {
  let parsedTodos = JSON.parse(localStorage.getItem('TODO_SITE_V1')) || [];
  localStorage.setItem('TODO_SITE_V1', JSON.stringify(parsedTodos));

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter(todo => !!todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const onTodoChange = (newTodos) => {
    localStorage.setItem('TODO_SITE_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const onCompleteHandler = (todoIndex) => {
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    onTodoChange(newTodos);
  }

  const onDeleteHandler = (todoIndex) => {
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    newTodos.forEach((todo, i) => {
      newTodos[i].id = i;
    });
    onTodoChange(newTodos);
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
