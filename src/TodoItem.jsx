const TodoItem = ({ text, isCompleted }) => {
  return (
    <li>
      <span>V</span>
      <p>{ text }</p>
      <span>X </span>
    </li>
  );
}

export { TodoItem };