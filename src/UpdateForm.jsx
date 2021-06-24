import React, { useState } from "react";

function UpdateForm({ todo, onUpdate, onClose }) {
  const [newTodo, setNewTodo] = useState(todo);

  const handleChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.id]: e.target.value });
  };

  const handleSaveClick = () => {
    if (newTodo.title.length === 0) {
      alert("제목을 입력해주세요.");
      return;
    }

    onUpdate(newTodo);
    onClose();
  };

  return (
    <div>
      <h3>수정할 제목</h3>
      <input id="title" onChange={handleChange} value={newTodo.title} />
      <select id="status" onChange={handleChange}>
        <option value="todo" selected={newTodo.status === "todo"}>
          To Do
        </option>
        <option value="in-progress" selected={newTodo.status === "in-progress"}>
          In Progress
        </option>
        <option value="done" selected={newTodo.status === "done"}>
          Done
        </option>
      </select>
      <button onClick={handleSaveClick}>저장</button>
      <button onClick={onClose}>닫기</button>
    </div>
  );
}

export default UpdateForm;
