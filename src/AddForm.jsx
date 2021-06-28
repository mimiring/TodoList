import { useState } from "react";

const baseTodo = {
  title: "",
  status: "todo",
  category: "empty",
  note: "",
};

const AddForm = ({ onSave }) => {
  const [todo, setTodo] = useState(baseTodo);

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.id]: e.target.value });
  };

  const handleSaveClick = () => {
    if (todo.title.length === 0) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (todo.category === "empty") {
      alert("카테고리는 반드시 선택해야 합니다.");
      return;
    }

    onSave(todo).then(() => {
      setTodo(baseTodo);
    });
  };

  return (
    <div>
      <input
        onChange={handleChange}
        id="title"
        value={todo.title}
        placeholder="제목을 입력하세요"
      />
      <select id="status" onChange={handleChange}>
        <option value="todo" selected={todo.status === "todo"}>
          To Do
        </option>
        <option value="in-progress" selected={todo.status === "in-progress"}>
          In Progress
        </option>
        <option value="done" selected={todo.status === "done"}>
          Done
        </option>
      </select>

      <select id="category" onChange={handleChange}>
        <option value="empty" selected={todo.category === "empty"} disabled>
          선택하세요
        </option>
        <option
          value="self-development"
          selected={todo.category === "self-development"}
        >
          자기개발
        </option>
        <option value="hobby" selected={todo.category === "hobby"}>
          취미
        </option>
        <option value="work" selected={todo.category === "work"}>
          업무
        </option>
        <option value="house-work" selected={todo.category === "house-work"}>
          집안일
        </option>
        <option value="etc" selected={todo.category === "etc"}>
          기타
        </option>
      </select>

      <label htmlFor="note">노트</label>
      <textarea id="note" value={todo.note} onChange={handleChange} />
      <button onClick={handleSaveClick}>저장</button>
    </div>
  );
};

export default AddForm;
