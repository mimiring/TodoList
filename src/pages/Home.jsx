import { useEffect, useState } from "react";
import {
  addRequset,
  deleteTodoRequest,
  getAllRequest,
  updateRequest,
} from "../services/request";
import TodoList from "../components/TodoList";
import AddForm from "../components/AddForm";
import UpdateForm from "../components/UpdateForm";
import CategoryList from "../components/CategoryList";
import { STATUS } from "../constants";

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [target, setTarget] = useState(null);
  const [isUpdateVisible, setUpdateVisible] = useState(false);

  const addTodo = (todo) => {
    return addRequset(todo).then((todoData) => {
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

  const countCategory = () => {
    let categories = {};
    for (let i = 0; i < todoList.length; i++) {
      if (categories[todoList[i].category]) {
        categories[todoList[i].category]++;
      } else {
        categories[todoList[i].category] = 1;
      }
    }

    return Object.entries(categories);
  };

  return (
    <>
      <CategoryList categories={countCategory(todoList)} />
      <AddForm onSave={addTodo} />
      {isUpdateVisible && (
        <UpdateForm
          todo={target}
          onUpdate={updateTodo}
          onClose={closeEditForm}
        />
      )}
      <h2>To Do</h2>
      <TodoList
        todoList={todoList.filter((todo) => todo.status === STATUS.TODO)}
        message="할 일을 모두 마쳤어요"
        onDelete={deleteTodo}
        onEditClick={openEditForm}
      />
      {console.log()}
      <h2>In Progress</h2>
      <TodoList
        todoList={todoList.filter((todo) => todo.status === STATUS.INPROGRESS)}
        message="진행중인 일을 모두 마쳤어요"
        onDelete={deleteTodo}
        onEditClick={openEditForm}
      />
      <h2>Done</h2>
      <TodoList
        todoList={todoList.filter((todo) => todo.status === STATUS.DONE)}
        message="완료한 일이 아직 없네요"
        onDelete={deleteTodo}
        onEditClick={openEditForm}
      />
    </>
  );
}

export default Home;
