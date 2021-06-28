import { useState } from "react";
import { CATEGORY, STATUS } from "../constants";

const baseTodo = {
  title: "",
  status: STATUS.TODO,
  category: CATEGORY.EMPTY,
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
    if (todo.category === CATEGORY.EMPTY) {
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
        <option value={STATUS.TODO} selected={todo.status === STATUS.TODO}>
          To Do
        </option>
        <option
          value={STATUS.INPROGRESS}
          selected={todo.status === STATUS.INPROGRESS}
        >
          In Progress
        </option>
        <option value={STATUS.DONE} selected={todo.status === STATUS.DONE}>
          Done
        </option>
      </select>

      <select id="category" onChange={handleChange}>
        <option
          value={CATEGORY.EMPTY}
          selected={todo.category === CATEGORY.EMPTY}
          disabled
        >
          선택하세요
        </option>
        <option
          value={CATEGORY.SELF_DEVELOPMENT}
          selected={todo.category === CATEGORY.SELF_DEVELOPMENT}
        >
          자기개발
        </option>
        <option
          value={CATEGORY.HOBBY}
          selected={todo.category === CATEGORY.HOBBY}
        >
          취미
        </option>
        <option
          value={CATEGORY.WORK}
          selected={todo.category === CATEGORY.WORK}
        >
          업무
        </option>
        <option
          value={CATEGORY.HOUSE_WORK}
          selected={todo.category === CATEGORY.HOUSE_WORK}
        >
          집안일
        </option>
        <option value={CATEGORY.ETC} selected={todo.category === CATEGORY.ETC}>
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
