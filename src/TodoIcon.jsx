import React from 'react'
import { ReactComponent as CheckIcon } from './CheckMarkIcon.svg';
import { ReactComponent as CloseIcon } from './CloseIcon.svg';
import { ReactComponent as PlusIcon } from './PlusIcon.svg';

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