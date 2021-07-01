import React from "react";
import { Link } from "react-router-dom";
import { CATEGORY } from "../constants";

function CategoryItem({ name, count }) {
  let emoji = "";
  if (name === CATEGORY.WORK) {
    emoji = "🖥";
  } else if (name === CATEGORY.SELF_DEVELOPMENT) {
    emoji = "🥰";
  } else if (name === CATEGORY.HOBBY) {
    emoji = "❤";
  } else if (name === CATEGORY.HOUSE_WORK) {
    emoji = "🏠";
  } else if (name === CATEGORY.ETC) {
    emoji = "🗒";
  }

  return (
    <li className="category_item">
      <Link to={`/?categories=${name}`}>
        <div className="category_item_emoji">{emoji}</div>
        <span className="category_item_name">{name}</span>
        <span className="category_item_count">{count}</span>
      </Link>
    </li>
  );
}

function CategoryList({ categories }) {
  return (
    <ul className="category_list">
      {categories.map(([name, count]) => (
        <CategoryItem name={name} count={count} />
      ))}
    </ul>
  );
}

export default CategoryList;
