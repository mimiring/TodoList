import { useEffect, useState } from "react";
import AddForm from "./AddForm";
import { addRequset, getAllRequest } from "./services/request";
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
    const newTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    setTodoList(newTodoList);
  };

  const handleUpdateClick = (todo) => {
    setTarget(todo);
    setUpdateVisible(true);
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
        <UpdateForm title={target.title} onUpdate={updateTodoTitle} />
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
