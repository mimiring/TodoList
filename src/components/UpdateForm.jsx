import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Category, STATUS } from "../constants";

function UpdateForm({ todo, onUpdate, onClose, onDelete }) {
  const [newTodo, setNewTodo] = useState(todo);
  const history = useHistory();
  const handleChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.id]: e.target.value });
  };

  const handleSaveClick = () => {
    if (newTodo.title.length === 0) {
      alert("제목을 입력해주세요.");
      return;
    }

    onUpdate(newTodo).then(() => {
      history.push("/");
    });
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <div>
      <h3>수정할 제목</h3>
      <label htmlFor="title" className="todo_input_title">
        Title
      </label>
      <input
        id="title"
        className="todo_input"
        onChange={handleChange}
        value={newTodo.title}
      />

      <label htmlFor="status" className="todo_input_title">
        Status
      </label>
      <select id="status" className="todo_select" onChange={handleChange}>
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

      <label htmlFor="category" className="todo_input_title">
        Category
      </label>
      <select id="category" className="todo_select" onChange={handleChange}>
        <option
          value={Category.SELF_DEVELOPMENT}
          selected={newTodo.category === Category.SELF_DEVELOPMENT}
        >
          자기개발
        </option>
        <option
          value={Category.HOBBY}
          selected={newTodo.category === Category.HOBBY}
        >
          취미
        </option>
        <option
          value={Category.WORK}
          selected={newTodo.category === Category.WORK}
        >
          업무
        </option>
        <option
          value={Category.HOUSE_WORK}
          selected={newTodo.category === Category.HOUSE_WORK}
        >
          집안일
        </option>
        <option
          value={Category.ETC}
          selected={newTodo.category === Category.ETC}
        >
          기타
        </option>
      </select>

      <label htmlFor="note" className="todo_input_title">
        Note
      </label>
      <textarea
        id="note"
        className="todo_textarea"
        value={newTodo.note}
        onChange={handleChange}
      />

      <button className="todo_savebtn" onClick={handleSaveClick}>
        Save Changes
      </button>
      <button className="todo_delbtn" onClick={handleDeleteClick}>
        Delete To Do
      </button>
    </div>
  );
}

export default UpdateForm;
