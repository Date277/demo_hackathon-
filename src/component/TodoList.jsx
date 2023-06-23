import React, { useState } from "react";
import "./Todolist.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const handleInputChange = (event) => {
    if (editIndex !== null) {
      setEditTask(event.target.value);
    } else {
      setTask(event.target.value);
    }
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = editTask;
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditTask("");
    } else {
      if (task.trim() !== "") {
        setTasks([...tasks, task]);
        setTask("");
      }
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index]);
  };

  return (
    <div>
      <h1>Note App</h1>
      <form onSubmit={handleAddTask}>
        <p>Title</p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Take a note"
          onChange={handleInputChange}
          value={editIndex !== null ? editTask : task}
        ></textarea>
        <button type="submit" className="btn_save">
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>

      <div className="nodes">
        {tasks.map((task, index) => (
          <div className="node" key={index}>
            {task}
            <div className="btn">
              <button onClick={() => handleEditTask(index)}>Edit</button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
