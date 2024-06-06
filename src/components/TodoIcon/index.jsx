import React from 'react'
import { ReactComponent as CheckIcon } from './assets/CheckMarkIcon.svg';
import { ReactComponent as CloseIcon } from './assets/CloseIcon.svg';
import { ReactComponent as PlusIcon } from './assets/PlusIcon.svg';

import "./index.css"

const iconTypes = {
  "check": <CheckIcon />,
  "close": <CloseIcon />,
  "plus": <PlusIcon />
}

const TodoIcon = ({ type, onClick }) => {
  return (
    <span className={`Icon Icon-${type}`} onClick={onClick}>
      {
        iconTypes[type]
      }
    </span>
  )
}

export { TodoIcon }