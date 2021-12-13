import "./App.css";
import React, { useState } from "react";
import TaskTable from "./componets/TaskTable";
import AddTaskForm from "./componets/AddTaskForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const taskData = [];

  const [tasks, setTasks] = useState(taskData);

  const addTask = (task) => {
    task.id = uuidv4();
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <AddTaskForm addTask={addTask}/>
      <TaskTable tasks={tasks}/>
    </div>
  );
}

export default App;
