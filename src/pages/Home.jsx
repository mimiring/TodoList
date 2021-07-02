import { useEffect, useState } from "react";
import {
  deleteTodoRequest,
  getAllRequest,
  updateRequest,
} from "../services/request";
import TodoList from "../components/TodoList";
import UpdateForm from "../components/UpdateForm";
import CategoryList from "../components/CategoryList";
import { STATUS } from "../constants";
import { Link } from "react-router-dom";
import Search from "../components/Search";

function Home({ location }) {
  const [todoList, setTodoList] = useState([]);
  const [target, setTarget] = useState(null);
  const [isUpdateVisible, setUpdateVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const params = new URLSearchParams(location.search);
  const categoryName = params.get("categories");
  const isCategoryView = categoryName !== null;
  const categoryFilter = (category) => {
    if (isCategoryView) {
      return category === categoryName;
    }
    return true;
  };

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
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
      {isCategoryView && (
        <div>
          <Link to="/">ALL</Link>
          <span class="category_item_name">{categoryName}</span>
        </div>
      )}
      {isUpdateVisible && (
        <UpdateForm
          todo={target}
          onUpdate={updateTodo}
          onClose={closeEditForm}
        />
      )}

      <header className="todos_header">
        <h1 className="todos_title">ToDos</h1>
        <button className="search_icon" onClick={handleSearchClick}></button>
        {isSearchVisible && <Search />}
      </header>
      <p className="description">계획적인 삶을 살자!</p>
      <div className="category_wrap">
        {!isCategoryView && (
          <CategoryList categories={countCategory(todoList)} />
        )}
      </div>
      <section className="todos_section">
        <h2 className="todo_section_title">To Do</h2>
        <TodoList
          todoList={todoList.filter(
            (todo) =>
              todo.status === STATUS.TODO && categoryFilter(todo.category)
          )}
          message="할 일을 모두 마쳤어요"
          onDelete={deleteTodo}
          onEditClick={openEditForm}
        />
      </section>

      <section className="todos_section">
        <h2 className="todo_section_title">In Progress</h2>
        <TodoList
          todoList={todoList.filter(
            (todo) =>
              todo.status === STATUS.INPROGRESS && categoryFilter(todo.category)
          )}
          message="진행중인 일을 모두 마쳤어요"
          onDelete={deleteTodo}
          onEditClick={openEditForm}
        />
      </section>

      <section className="todos_section">
        <h2 className="todo_section_title">Done</h2>
        <TodoList
          todoList={todoList.filter(
            (todo) =>
              todo.status === STATUS.DONE && categoryFilter(todo.category)
          )}
          message="완료한 일이 아직 없네요"
          onDelete={deleteTodo}
          onEditClick={openEditForm}
        />
      </section>
      <Link to="/new" className="add_btn" />
    </>
  );
}

export default Home;
