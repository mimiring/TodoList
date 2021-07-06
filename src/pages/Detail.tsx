import React, { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { ToDo } from "../components/Todo";
import UpdateForm from "../components/UpdateForm";
import {
  deleteTodoRequest,
  getDetailRequest,
  updateRequest,
} from "../services/request";

type MatchParams = {
  id: string;
};
type DetailProps = RouteComponentProps<MatchParams>;

const Detail = ({ match, history }: DetailProps) => {
  const [todo, setTodo] = useState<ToDo>();
  const [isLoading, setLoading] = useState(true);

  const updateTodo = (newTodo: ToDo) => {
    return updateRequest(newTodo)
      .then(() => {
        setTodo(newTodo);
      })
      .catch(() => {
        history.push("/err");
      });
  };

  const handleDeleteClick = () => {
    if (todo) {
      deleteTodoRequest(todo.id)
        .then(() => {
          history.push("/");
        })
        .catch(() => {
          history.push("/err");
        });
    }
  };

  useEffect(() => {
    getDetailRequest(match.params.id)
      .then((todo) => {
        setTodo(todo[0]);
        setLoading(false);
      })
      .catch(() => {
        history.push("/err");
      });
  }, []);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <div>
      <div className="todo_title_wrap">
        <Link className="todo_backbtn" to="/"></Link>
        <h3 className="todo_title">Edit To Do</h3>
      </div>

      {todo && (
        <UpdateForm
          todo={todo}
          onUpdate={updateTodo}
          onDelete={handleDeleteClick}
        />
      )}
    </div>
  );
};

export default Detail;
