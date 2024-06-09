import React from 'react';
import ReactDOM from 'react-dom';

const TodoModal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className='TodoModal'>
      { children }
    </div>
    , document.getElementById('todo-modal'))
}

export { TodoModal };
