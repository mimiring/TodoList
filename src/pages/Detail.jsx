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
  const [isUpdateVisible, setUpdateVisible] = useState(false);

  const updateTodo = (newTodo) => {
    updateRequest(newTodo).then(() => {
      setTodo(newTodo);
      setUpdateVisible(false);
    });
  };

  const closeEditForm = () => {
    setUpdateVisible(false);
  };

  const handleEditClick = () => {
    setUpdateVisible(true);
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
      {isUpdateVisible ? (
        <UpdateForm todo={todo} onUpdate={updateTodo} onClose={closeEditForm} />
      ) : (
        <div>
          <button onClick={handleEditClick}>수정</button>
          <button onClick={handleDeleteClick}>삭제</button>
          <h2>{todo.title}</h2>
          <div>
            {todo.status} {todo.category}
          </div>
          <p>{todo.note}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
