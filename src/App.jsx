import { useContext } from 'react';

import { TodoContext } from './contexts/TodoContext';

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
  const { isLoading, error, filteredTodos, onCompleteHandler, onDeleteHandler } = useContext(TodoContext);

  return (
    <div className="App">
      <TodoAddForm className="responsiveForm" />

      <TodoCounter>
        <TodoSearchForm
          // searchValue={searchValue}
          // setSearchValue={setSearchValue}
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
