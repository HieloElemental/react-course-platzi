import { useLocalStorage } from './hooks/useLocalStorage';
import { useState } from 'react';

import { TodoAddForm } from './components/TodoAddForm';
import { TodoCounter } from './containers/TodoCounter';
import { TodoEmptyTodos } from './components/TodoEmptyTodos';
import { TodoError } from './components/TodoError';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './containers/TodoList';
import { TodoLoading } from './components/TodoLoading';
import { TodoOpenAddFormButton } from './components/TodoOpenAddFormButton';
import { TodoSearchForm } from './components/TodoSearchForm';

import './App.css';

const App = () => {
  const {
    item: todos,
    onItemChange: setTodos,
    isLoading,
    error
  } = useLocalStorage({ itemName: 'TODO_SITE_V1', initialValue: [] });
  
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = searchValue ? todos.filter(todo => !!todo.text.toLowerCase().includes(searchValue.toLowerCase())) : todos;

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
        {isLoading && <TodoLoading />}
        {error && <TodoError />}
        {(!isLoading && filteredTodos.length === 0) && <TodoEmptyTodos />}

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
