import { ChangeEvent, useState } from "react";
import { Category, Status } from "../constants";
import { ToDo } from "../type";

type AddFormProps = {
  onSave: (todo: ToDo) => Promise<void>;
};

const baseTodo = {
  id: Date.now(),
  title: "",
  status: Status.TODO,
  category: Category.EMPTY,
  note: "",
};

const AddForm = ({ onSave }: AddFormProps) => {
  const [todo, setTodo] = useState(baseTodo);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setTodo({ ...todo, [e.target.id]: e.target.value });
  };

  const handleSaveClick = () => {
    if (todo.title.length === 0) {
      alert("제목을 입력해주세요.");
      return;
    }
    if (todo.category === Category.EMPTY) {
      alert("카테고리는 반드시 선택해야 합니다.");
      return;
    }

    onSave(todo).then(() => {
      setTodo(baseTodo);
    });
  };

  return (
    <div className="todo_wrap">
      <label htmlFor="title" className="todo_input_title">
        Title
      </label>
      <input
        onChange={handleChange}
        id="title"
        className="todo_input"
        value={todo.title}
        placeholder="제목을 입력하세요"
      />
      <label htmlFor="status" className="todo_input_title">
        Status
      </label>
      <select id="status" className="todo_select" onChange={handleChange}>
        <option value={Status.TODO} selected={todo.status === Status.TODO}>
          To Do
        </option>
        <option
          value={Status.INPROGRESS}
          selected={todo.status === Status.INPROGRESS}
        >
          In Progress
        </option>
        <option value={Status.DONE} selected={todo.status === Status.DONE}>
          Done
        </option>
      </select>

      <label htmlFor="category" className="todo_input_title">
        Category
      </label>
      <select id="category" className="todo_select" onChange={handleChange}>
        <option
          value={Category.EMPTY}
          selected={todo.category === Category.EMPTY}
          disabled
        >
          선택하세요
        </option>
        <option
          value={Category.SELF_DEVELOPMENT}
          selected={todo.category === Category.SELF_DEVELOPMENT}
        >
          자기개발
        </option>
        <option
          value={Category.HOBBY}
          selected={todo.category === Category.HOBBY}
        >
          취미
        </option>
        <option
          value={Category.WORK}
          selected={todo.category === Category.WORK}
        >
          업무
        </option>
        <option
          value={Category.HOUSE_WORK}
          selected={todo.category === Category.HOUSE_WORK}
        >
          집안일
        </option>
        <option value={Category.ETC} selected={todo.category === Category.ETC}>
          기타
        </option>
      </select>

      <label htmlFor="note" className="todo_input_title">
        Note
      </label>
      <textarea
        id="note"
        className="todo_textarea"
        value={todo.note}
        onChange={handleChange}
        placeholder="Put your notes here"
      />
      <button className="todo_savebtn" onClick={handleSaveClick}>
        Create To Do
      </button>
    </div>
  );
};

export default AddForm;
