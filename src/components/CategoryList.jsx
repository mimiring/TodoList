import React from "react";
import { Link } from "react-router-dom";
import { getCategoryEmoji } from "../constants";

function CategoryItem({ name, count }) {
  const emoji = getCategoryEmoji(name);

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
        <CategoryItem key={name} name={name} count={count} />
      ))}
    </ul>
  );
}

export default CategoryList;
