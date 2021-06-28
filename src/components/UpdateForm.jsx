import React, { useState } from "react";
import { CATEGORY, STATUS } from "../constants";

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
        <option value={STATUS.TODO} selected={newTodo.status === STATUS.TODO}>
          To Do
        </option>
        <option
          value={STATUS.INPROGRESS}
          selected={newTodo.status === STATUS.INPROGRESS}
        >
          In Progress
        </option>
        <option value={STATUS.DONE} selected={newTodo.status === STATUS.DONE}>
          Done
        </option>
      </select>

      <select id="category" onChange={handleChange}>
        <option
          value={CATEGORY.SELF_DEVELOPMENT}
          selected={newTodo.category === CATEGORY.SELF_DEVELOPMENT}
        >
          자기개발
        </option>
        <option
          value={CATEGORY.HOBBY}
          selected={newTodo.category === CATEGORY.HOBBY}
        >
          취미
        </option>
        <option
          value={CATEGORY.WORK}
          selected={newTodo.category === CATEGORY.WORK}
        >
          업무
        </option>
        <option
          value={CATEGORY.HOUSE_WORK}
          selected={newTodo.category === CATEGORY.HOUSE_WORK}
        >
          집안일
        </option>
        <option
          value={CATEGORY.ETC}
          selected={newTodo.category === CATEGORY.ETC}
        >
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
