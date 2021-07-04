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
    updateRequest(newTodo).then(() => {
      setTodo(newTodo);
    });
  };

  const handleDeleteClick = () => {
    deleteTodoRequest(todo.id).then(() => {
      history.push("/");
    });
  };

  useEffect(() => {
    getDetailRequest(match.params.id).then((todo) => {
      setTodo(todo[0]);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <div>
      <Link to="/">back</Link>
      <UpdateForm
        todo={todo}
        onUpdate={updateTodo}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default Detail;
