import { useEffect, useState } from "react";
import AddForm from "./AddForm";
import {
  addRequset,
  getAllRequest,
  updateCompletedRequest,
} from "./services/request";
import TodoList from "./TodoList";
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

  const deleteTodo = (todoId) => {
    const newTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newTodoList);
  };

  const toggleCompleted = (todoId) => {
    let completed;
    const newTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
        completed = todo.completed;
      }
      return todo;
    });

    updateCompletedRequest(todoId, completed).then(() =>
      setTodoList(newTodoList)
    );
  };

  const handleUpdateClick = (todo) => {
    setTarget(todo);
    setUpdateVisible(true);
  };

  const handleCloseClick = () => {
    setUpdateVisible(false);
  };

  const updateTodoTitle = (title) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === target.id) {
        return {
          ...todo,
          title,
        };
      } else {
        return todo;
      }
    });
    setTodoList(newTodoList);
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
          title={target.title}
          onUpdate={updateTodoTitle}
          handleCloseClick={handleCloseClick}
        />
      )}
      <TodoList
        todoList={todoList}
        onToggle={toggleCompleted}
        onDelete={deleteTodo}
        onEditClick={handleUpdateClick}
      />
    </>
  );
}

export default App;
