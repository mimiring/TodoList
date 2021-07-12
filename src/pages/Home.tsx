import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { getAllRequest, updateRequest } from "../services/request";
import TodoList from "../components/TodoList";
import CategoryList from "../components/CategoryList";
import { Category, Status } from "../constants";
import { Link, RouteComponentProps } from "react-router-dom";
import Search from "../components/Search";
import { ToDo } from "../type";
import { HTML5Backend } from "react-dnd-html5-backend";

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
    setSearchVisible(true);
  };

  const closeSearch = () => {
    setSearchVisible(false);
  };

  useEffect(() => {
    getAllRequest()
      .then((json) => setTodoList(json))
      .catch(() => {
        history.push("/err");
      });
  }, []);

  const countCategory = () => {
    let categories = {} as { [key in Category]: number };
    for (let i = 0; i < todoList.length; i++) {
      if (categories[todoList[i].category]) {
        categories[todoList[i].category]++;
      } else {
        categories[todoList[i].category] = 1;
      }
    }

    return Object.entries(categories) as [Category, number][];
  };

  const changeStatus = (newTodo: ToDo) => {
    return updateRequest(newTodo).then(() => {
      const newTodoList = todoList.map((todo) => {
        if (newTodo.id === todo.id) {
          return newTodo;
        } else {
          return todo;
        }
      });
      setTodoList(newTodoList);
    });
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
      <DndProvider backend={HTML5Backend}>
        <section className="todos_section">
          <h2 className="todo_section_title">To Do</h2>
          <TodoList
            todoList={todoList.filter(
              (todo) =>
                todo.status === Status.TODO && categoryFilter(todo.category)
            )}
            message="할 일을 모두 마쳤어요"
            status={Status.TODO}
            onDrop={changeStatus}
          />
        </section>

        <section className="todos_section">
          <h2 className="todo_section_title">In Progress</h2>
          <TodoList
            todoList={todoList.filter(
              (todo) =>
                todo.status === Status.INPROGRESS &&
                categoryFilter(todo.category)
            )}
            message="진행중인 일을 모두 마쳤어요"
            status={Status.INPROGRESS}
            onDrop={changeStatus}
          />
        </section>

        <section className="todos_section">
          <h2 className="todo_section_title">Done</h2>
          <TodoList
            todoList={todoList.filter(
              (todo) =>
                todo.status === Status.DONE && categoryFilter(todo.category)
            )}
            message="완료한 일이 아직 없네요"
            status={Status.DONE}
            onDrop={changeStatus}
          />
        </section>
      </DndProvider>
      <Link to="/new" className="add_btn" />
      {isSearchVisible && <Search closeSearch={closeSearch} />}
    </>
  );
}

export default Home;
