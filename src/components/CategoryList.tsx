import React from "react";
import { Link } from "react-router-dom";
import { Category, getCategoryEmoji } from "../constants";

type CategoryItemProps = {
  name: Category;
  count: number;
};

function CategoryItem({ name, count }: CategoryItemProps) {
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

type CategoryListProps = {
  categories: [Category, number][];
};

function CategoryList({ categories }: CategoryListProps) {
  return (
    <ul className="category_list">
      {categories.map(([name, count]) => (
        <CategoryItem key={name} name={name} count={count} />
      ))}
    </ul>
  );
}

export default CategoryList;
