import { useEffect, useState } from "react";

const USER_ID = 123456789;
const makeTodo = (title) => {
  return {
    id: Date.now(),
    title,
    completed: false,
    userId: USER_ID,
  };
};

function App() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodoList(json));
  }, []);

  const handleSaveClick = () => {
    if (title.length === 0) {
      alert("값을 입력하세요");
      return;
    }
    // todoList에 추가하기
    setTodoList([
      {
        id: Date.now(),
        title,
        completed: false,
        userId: USER_ID,
      },
      ...todoList,
    ]);
    setTitle("");
  };

  return (
    <>
      <input onChange={handleTitleChange} value={title} />
      <button onClick={handleSaveClick}>저장</button>
      <ul>
        {todoList.map((todoItem) => (
          <li key={todoItem.id}>{todoItem.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
