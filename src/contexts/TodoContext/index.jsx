import { createContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoContext = createContext();

const TodoProvider = ({children}) => {
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
    <TodoContext.Provider value={{
      isLoading,
      error,
      completedTodos,
      totalTodos,
      filteredTodos,
      searchValue,
      setSearchValue,
      onCompleteHandler,
      onDeleteHandler
    }}>
      { children }
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }