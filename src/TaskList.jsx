import AddTask from "./AddTask";
import data from "./data.json";
import Task from "./Task";
import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState(data.tasks);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Task List</h1>
          <AddTask onAddTask={handleAddTask} />
        </div>
        <div className="d-flex flex-column mt-3 gap-3">
          {tasks.map((task) => (
            <Task key={task.name} task={task} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TaskList;
