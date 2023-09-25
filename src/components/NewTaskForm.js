import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: categories[0],
  });

  const { text, category } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== "") {
      onTaskFormSubmit(formData);
      setFormData({
        text: "",
        category: categories[0],
      });
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleInputChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleInputChange}>
          {categories.map((cat) => (
            cat !== "All" && (
              <option key={cat} value={cat}>
                {cat}
              </option>
            )
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


