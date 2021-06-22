import { useEffect, useState } from "react";
import AddForm from "./AddForm";

const USER_ID = 123456789;

function App() {
  const [todoList, setTodoList] = useState([]);

  const updateList = (title) => {
    return fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title,
        completed: false,
        userId: USER_ID,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((todoData) => {
        setTodoList([todoData, ...todoList]);
      });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodoList(json));
  }, []);

  return (
    <>
      <AddForm onSave={updateList} />

      <ul>
        {todoList.map((todoItem) => (
          <li key={todoItem.id}>{todoItem.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
