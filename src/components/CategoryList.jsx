import React from "react";
import { Link } from "react-router-dom";

function CategoryList({ categories }) {
  return (
    <ul>
      {categories.map(([key, value]) => (
        <li>
          <Link to={`/?categories=${key}`}>
            <span class="category_item_name">{key}</span>
            <span class="category_item_count">{value}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
