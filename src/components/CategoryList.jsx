import React from "react";
import { Link } from "react-router-dom";

function CategoryList({ categories }) {
  return (
    <ul>
      {categories.map(([key, value]) => (
        <li>
          <Link to={`/?categories=${key}`}>
            {key} : {value}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
