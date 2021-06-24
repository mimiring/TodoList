const URL = "http://localhost:3001/todos";
const POST = "POST";

export const getAllRequest = () => {
  return fetch(`${URL}?_sort=id&_order=DESC`).then((response) =>
    response.json()
  ); // id순으로 내림차순 정렬
};

const USER_ID = 123456789;

export const addRequset = (title) => {
  return fetch(URL, {
    method: POST,
    body: JSON.stringify({
      title,
      completed: false,
      userId: USER_ID,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};
