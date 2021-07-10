import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Category, Status } from "../constants";
import { ToDo } from "./Todo";

type UpdateFormProps = {
  todo: ToDo;
  onUpdate: (newTodo: ToDo) => Promise<void>;
  onDelete: () => void;
};

function UpdateForm({ todo, onUpdate, onDelete }: UpdateFormProps) {
  const [newTodo, setNewTodo] = useState(todo);
  const history = useHistory();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
    <div className="todo_wrap">
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
        <option value={Status.TODO} selected={newTodo.status === Status.TODO}>
          To Do
        </option>
        <option
          value={Status.INPROGRESS}
          selected={newTodo.status === Status.INPROGRESS}
        >
          In Progress
        </option>
        <option value={Status.DONE} selected={newTodo.status === Status.DONE}>
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
