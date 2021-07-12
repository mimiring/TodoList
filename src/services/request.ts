import { Http } from "../constants";
import { ToDo } from "../type";

const URL = "http://localhost:3001/todos";

export const getAllRequest = () => {
  return fetch(`${URL}?_sort=id&_order=DESC`).then((response) =>
    response.json()
  ); // id순으로 내림차순 정렬
};

export const addRequset = (todo: ToDo) => {
  return fetch(URL, {
    method: Http.POST,
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

export const deleteTodoRequest = (todoId: number) => {
  return fetch(`${URL}/${todoId}`, {
    method: Http.DELETE,
  });
};

export const updateRequest = (todo: ToDo) => {
  return fetch(`${URL}/${todo.id}`, {
    method: Http.PUT,
    body: JSON.stringify(todo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export const getDetailRequest = (id: number) => {
  return fetch(`${URL}?id=${id}`)
    .then((response) => response.json())
    .then((data) => data[0]);
};

export const searchRequest = (title: string) => {
  return fetch(`${URL}?_sort=id&_order=DESC&q=${title}`).then((response) =>
    response.json()
  );
};
