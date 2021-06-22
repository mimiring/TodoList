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

  const deleteTodo = (todoId) => {
    const newTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newTodoList);
  };

  useEffect(() => {
    getAllRequest().then((json) => setTodoList(json));
  }, []);

  return (
    <>
      <AddForm onSave={updateList} />
      <TodoList todoList={todoList} onDelete={deleteTodo} />
    </>
  );
}

export default App;
