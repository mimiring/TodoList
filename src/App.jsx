import { useEffect, useState } from "react";
import {
  addRequset,
  deleteTodoRequest,
  getAllRequest,
  updateRequest,
} from "./services/request";
import TodoList from "./TodoList";
import AddForm from "./AddForm";
import UpdateForm from "./UpdateForm";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [target, setTarget] = useState(null);
  const [isUpdateVisible, setUpdateVisible] = useState(false);

  const addTodo = (title) => {
    return addRequset(title).then((todoData) => {
      setTodoList([todoData, ...todoList]);
    });
  };

  const updateTodo = (newTodo) => {
    updateRequest(newTodo).then(() => {
      const newTodoList = todoList.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo;
        }
        return todo;
      });
      setTodoList(newTodoList);
      setTarget(null);
    });
  };

  const deleteTodo = (todoId) => {
    deleteTodoRequest(todoId).then(() => {
      const newTodoList = todoList.filter((todo) => {
        return todo.id !== todoId;
      });
      setTodoList(newTodoList);
    });
  };

  const openEditForm = (todo) => {
    setTarget(todo);
    setUpdateVisible(true);
  };

  const closeEditForm = () => {
    setUpdateVisible(false);
  };

  useEffect(() => {
    getAllRequest().then((json) => setTodoList(json));
  }, []);

  return (
    <>
      <AddForm onSave={addTodo} />
      {isUpdateVisible && (
        <UpdateForm
          todo={target}
          onUpdate={updateTodo}
          onClose={closeEditForm}
        />
      )}
      <TodoList
        todoList={todoList}
        onDelete={deleteTodo}
        onEditClick={openEditForm}
      />
    </>
  );
}

export default App;
