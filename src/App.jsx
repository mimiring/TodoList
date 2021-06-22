import { useEffect, useState } from "react";
import AddForm from "./AddForm";
import { addRequset, getAllRequest } from "./services/request";

function App() {
  const [todoList, setTodoList] = useState([]);

  const updateList = (title) => {
    return addRequset(title).then((todoData) => {
      setTodoList([todoData, ...todoList]);
    });
  };

  useEffect(() => {
    getAllRequest().then((json) => setTodoList(json));
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
