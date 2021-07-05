import { useEffect, useState } from "react";
import { deleteTodoRequest, getAllRequest } from "../services/request";
import TodoList from "../components/TodoList";
import CategoryList from "../components/CategoryList";
import { Category, STATUS } from "../constants";
import { Link, RouteComponentProps } from "react-router-dom";
import Search from "../components/Search";
import { ToDo } from "../components/Todo";

type HomeProps = RouteComponentProps;

function Home({ location, history }: HomeProps) {
  const [todoList, setTodoList] = useState<ToDo[]>([]);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const params = new URLSearchParams(location.search);
  const categoryName = params.get("categories");
  const isCategoryView = categoryName !== null;
  const categoryFilter = (category: Category) => {
    if (isCategoryView) {
      return category === categoryName;
    }
    return true;
  };

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  const deleteTodo = (todoId: number) => {
    deleteTodoRequest(todoId)
      .then(() => {
        const newTodoList = todoList.filter((todo) => {
          return todo.id !== todoId;
        });
        setTodoList(newTodoList);
      })
      .catch(() => {
        history.push("/err");
      });
  };

  useEffect(() => {
    getAllRequest()
      .then((json) => setTodoList(json))
      .catch(() => {
        history.push("/err");
      });
  }, []);

  const countCategory = () => {
    let categories: { [key: string]: number } = {};
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
          <span className="category_item_name">{categoryName}</span>
        </div>
      )}
      <header className="todos_header">
        <h1 className="todos_title">ToDos</h1>
        <button className="search_icon" onClick={handleSearchClick}></button>
      </header>

      <p className="description">계획적인 삶을 살자!</p>
      <div className="category_wrap">
        {!isCategoryView && <CategoryList categories={countCategory()} />}
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
        />
      </section>
      <Link to="/new" className="add_btn" />
      {isSearchVisible && <Search />}
    </>
  );
}

export default Home;
