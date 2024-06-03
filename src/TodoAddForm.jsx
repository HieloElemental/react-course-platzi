import CloseIcon from "./CloseIcon";

const TodoAddForm = () => {
  return (
    <div className="TodoForm TodoAddForm">
      <div>
        <h1>Add Todo</h1>
        <label htmlFor="">
          TaskName:
        </label>
        <input type="text" placeholder="Cut Carrots" />
        <span className="Icon CloseIcon"><CloseIcon /></span>
      </div>
    </div>
  )
}

export { TodoAddForm };
