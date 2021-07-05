import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { searchRequest } from "../services/request";

const Search = () => {
  const [keyword, setKeyword] = useState();
  const [todoList, setTodoList] = useState([]);
  const history = useHistory();

  const handleChange = (e) => {
    const keyword = e.target.value;
    setKeyword(keyword);

    if (keyword.trim().length > 0) {
      searchRequest(keyword)
        .then((json) => setTodoList(json))
        .catch(() => {
          history.push("/err");
        });
    } else {
      setTodoList([]);
    }
  };

  return (
    <div>
      <input onChange={handleChange} value={keyword} />
      {todoList.length > 0 && (
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              {todo.category} {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
