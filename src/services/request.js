import { HTTP } from "../constants";

const URL = "http://localhost:3001/todos";

export const getAllRequest = () => {
  return fetch(`${URL}?_sort=id&_order=DESC`).then((response) =>
    response.json()
  ); // id순으로 내림차순 정렬
};

export const addRequset = (todo) => {
  return fetch(URL, {
    method: HTTP.POST,
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

export const deleteTodoRequest = (todoId) => {
  return fetch(`${URL}/${todoId}`, {
    method: HTTP.DELETE,
  });
};

export const updateRequest = (todo) => {
  return fetch(`${URL}/${todo.id}`, {
    method: HTTP.PUT,
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
