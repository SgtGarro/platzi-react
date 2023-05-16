import React from "react";

export const useLocalStorage = function (itemName, initialValue) {
  const todosFromStorage = localStorage.getItem(itemName);

  let parsedItem;
  if (!todosFromStorage) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }
  parsedItem = JSON.parse(todosFromStorage);

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = function (newItem) {
    localStorage.setItem("TODOS_V1", JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
};
