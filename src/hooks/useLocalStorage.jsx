import { useState } from "react"

const useLocalStorage = ({ itemName, initialValue }) => {
  let initialItem = localStorage.getItem(itemName);
  
  if (!initialItem) { 
    initialItem = initialValue;
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  } else {
    initialItem = JSON.parse(initialItem);
  }

  const [item, setItem] = useState(initialItem);

  const onItemChange = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
    return newItem;
  }

  return [item, onItemChange];
}

export { useLocalStorage }