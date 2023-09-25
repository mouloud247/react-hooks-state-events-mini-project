import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory = "All", onTaskDelete }) {
  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter((task) => task.category === selectedCategory);

  const onDelete = (taskKey) => {
    // Use the onTaskDelete callback to notify the parent component (App) to remove the task
    onTaskDelete(taskKey);
  };

  return (
    <div className="tasks">
      {filteredTasks.map((task) => (
        <Task
          key={task.text}
          category={task.category}
          text={task.text}
          handleDeleteClick={() => onDelete(task.text)}
        />
      ))}
    </div>
  );
}

export default TaskList;

