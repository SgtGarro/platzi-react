import React from "react";

export const useLocalStorage = function (itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const todosFromStorage = localStorage.getItem(itemName);
        let parsedItem;
        if (!todosFromStorage) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(todosFromStorage);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  });

  const saveItem = function (newItem) {
    localStorage.setItem("TODOS_V1", JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
};
