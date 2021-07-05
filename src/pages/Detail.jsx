import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpdateForm from "../components/UpdateForm";
import {
  deleteTodoRequest,
  getDetailRequest,
  updateRequest,
} from "../services/request";

const Detail = ({ match, history }) => {
  const [todo, setTodo] = useState();
  const [isLoading, setLoading] = useState(true);

  const updateTodo = (newTodo) => {
    return updateRequest(newTodo)
      .then(() => {
        setTodo(newTodo);
      })
      .catch(() => {
        history.push("/err");
      });
  };

  const handleDeleteClick = () => {
    deleteTodoRequest(todo.id)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        history.push("/err");
      });
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
        <h3 class="todo_title">Edit To Do</h3>
      </div>

      <UpdateForm
        todo={todo}
        onUpdate={updateTodo}
        onDelete={handleDeleteClick}
      />
    </div>
  );
};

export default Detail;
