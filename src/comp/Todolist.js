import React, { useState } from "react";
import "./TodoList.css";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    const task = e.target.elements.task.value;
    if (task.length === 0) {
      alert("Enter something");
    } else {
      setTasks([...tasks, task]);
      e.target.elements.task.value = "";
    }
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
    <div className="App">
      <h1 className="Name">Todo List</h1>
      <div className="Form">
        <form onSubmit={addTask}>
          <div className="d1">
            <input
              type="text"
              name="task"
              placeholder="Enter task"
              className="int"
              autoComplete="off"
            />
          </div>
          <div className="d1">
            <button className="init">Add Task</button>
          </div>
        </form>
        <div className="show">
          {tasks.map((task, index) => (
            <div className="list">
              <li key={index} className="data">
                {task}
                <div className="icon">
                  <button
                    className="option"
                    onClick={() =>
                      updateTask(index, prompt("Enter new task", task))
                    }
                  >
                    <MdModeEdit />
                  </button>
                  <button onClick={() => deleteTask(index)} className="option">
                    <MdDelete />
                  </button>
                </div>
              </li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
