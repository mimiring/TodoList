import React from "react";

function CategoryList({ categories }) {
  return (
    <ul>
      {categories.map(([key, value]) => (
        <li>
          {key} : {value}
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
