import { useState } from 'react';
import { TodoCounter } from './containers/TodoCounter';
import { TodoSearchForm } from './components/TodoSearchForm';
import { TodoAddForm } from './components/TodoAddForm';
import { TodoList } from './containers/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoOpenAddFormButton } from './components/TodoOpenAddFormButton';
import { useLocalStorage } from './hooks/useLocalStorage';

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
  const [todos, setTodos] = useLocalStorage({ itemName: 'TODO_SITE_V1', initialValue: []});
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter(todo => !!todo.text.toLowerCase().includes(searchValue.toLowerCase()));

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
