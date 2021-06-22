import { useEffect, useState } from "react";
import AddForm from "./AddForm";
import { addRequset, getAllRequest } from "./services/request";
import TodoList from "./services/TodoList";

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
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
