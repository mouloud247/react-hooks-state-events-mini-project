import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const onTaskDelete = (taskKey) => {
    // Filter out the task to be deleted and update the tasks state
    const updatedTasks = tasks.filter((task) => task.text !== taskKey);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList tasks={tasks} selectedCategory={selectedCategory} onTaskDelete={onTaskDelete} />
    </div>
  );
}

export default App;


