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
import { TodoProvider } from './contexts/TodoContext';

const App = () => {
  

  return (
    <TodoProvider>
      <div className="App">
        <TodoAddForm className="responsiveForm" />

        <TodoCounter
          // completedTodos={completedTodos}
          // totalTodos={totalTodos}
        >
          <TodoSearchForm
            // searchValue={searchValue}
            // setSearchValue={setSearchValue}
          />
          <TodoAddForm />
        </TodoCounter>

        <TodoContext.Consumer>
          {({
            isLoading,
            error,
            filteredTodos,
            onCompleteHandler,
            onDeleteHandler,
          }) => (
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
          )}
        </TodoContext.Consumer>
        <TodoOpenAddFormButton />
      </div>
    </TodoProvider>
  );
}

export default App;
