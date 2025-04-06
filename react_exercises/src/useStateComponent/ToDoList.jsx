import React, { useState } from "react";

const ToDoList = () => {
  const [items, setItems] = useState([]); // Initial state is an empty array

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]); // Add new item to the list
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <button onClick={() => addItem("New Task")}>Add Task</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
