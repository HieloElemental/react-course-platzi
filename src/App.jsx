import { useState } from 'react';
import { TodoCounter } from './containers/TodoCounter';
import { TodoSearchForm } from './components/TodoSearchForm';
import { TodoAddForm } from './components/TodoAddForm';
import { TodoList } from './containers/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoOpenAddFormButton } from './components/TodoOpenAddFormButton';
import { useLocalStorage } from './hooks/useLocalStorage';

import './App.css';

const App = () => {
  const {
    item: todos,
    setItem: setTodos,
    isLoading,
    error
  } = useLocalStorage({ itemName: 'TODO_SITE_V1', initialValue: [] });
  
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
        {isLoading && <p>loading</p>}
        {error && <p>Ha ocurrido un error inesperado</p>}
        {(!isLoading && filteredTodos.length === 0) && <p>Here are no todos.</p>}

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
