import { Http } from "../constants";

const URL = "http://localhost:3001/todos";

export const getAllRequest = () => {
  return fetch(`${URL}?_sort=id&_order=DESC`).then((response) =>
    response.json()
  ); // id순으로 내림차순 정렬
};

export const addRequset = (todo) => {
  return fetch(URL, {
    method: Http.POST,
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

export const deleteTodoRequest = (todoId) => {
  return fetch(`${URL}/${todoId}`, {
    method: Http.DELETE,
  });
};

export const updateRequest = (todo) => {
  return fetch(`${URL}/${todo.id}`, {
    method: Http.PUT,
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export const getDetailRequest = (id) => {
  return fetch(`${URL}?id=${id}`).then((response) => response.json());
};

export const searchRequest = (title) => {
  return fetch(`${URL}?_sort=id&_order=DESC&q=${title}`).then((response) =>
    response.json()
  );
};
