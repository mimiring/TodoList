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

      <select id="category" onChange={handleChange}>
        <option
          value="self-development"
          selected={newTodo.category === "self-development"}
        >
          자기개발
        </option>
        <option value="hobby" selected={newTodo.category === "hobby"}>
          취미
        </option>
        <option value="work" selected={newTodo.category === "work"}>
          업무
        </option>
        <option value="house-work" selected={newTodo.category === "house-work"}>
          집안일
        </option>
        <option value="etc" selected={newTodo.category === "etc"}>
          기타
        </option>
      </select>

      <label htmlFor="note">노트</label>
      <textarea id="note" value={newTodo.note} onChange={handleChange} />

      <button onClick={handleSaveClick}>저장</button>
      <button onClick={onClose}>닫기</button>
    </div>
  );
}

export default UpdateForm;
