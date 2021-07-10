import React from "react";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import {
  Category,
  DragTargetType,
  getCategoryEmoji,
  STATUS,
} from "../constants";

export type ToDo = {
  title: string;
  status: string;
  category: Category;
  note: string;
  id: number;
};

type TodoProps = {
  todo: ToDo;
  onDrop: (todo: ToDo) => Promise<void>;
};

const Todo = ({ todo, onDrop }: TodoProps) => {
  const emoji = getCategoryEmoji(todo.category);
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: DragTargetType.TODO_ITEM,
      item: {
        ...todo,
      },
      end(item, monitor) {
        const dropResult = monitor.getDropResult<ToDo>();
        if (dropResult && dropResult.status !== todo.status) {
          onDrop({ ...todo, status: dropResult.status });
        }
      },
      options: {
        dropEffect: "copy",
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [todo]
  );

  return (
    <li className="todo_item" ref={drag} style={{ opacity }}>
      <Link to={`/todos/${todo.id}`}>
        <div
          className={`todo_icon ${
            todo.status === STATUS.INPROGRESS ? "in_progress" : ""
          } ${todo.status === STATUS.DONE ? "done" : ""}`}
        ></div>
        <div className="todo_emoji">{emoji}</div>
        <span className="todo_item_text">{todo.title}</span>
      </Link>
    </li>
  );
};

export default Todo;
