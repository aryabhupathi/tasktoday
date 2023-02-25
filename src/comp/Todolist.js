import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    const task = e.target.elements.task.value;
    setTasks([...tasks, task]);
    e.target.elements.task.value = "";
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const updateTask = (index, newTask) => {
    const newTasks = [...tasks];
    newTasks[index] = newTask;
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTask}>
        <input type="text" name="task" placeholder="Enter task" />
        <button>Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button
              onClick={() => updateTask(index, prompt("Enter new task", task))}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
