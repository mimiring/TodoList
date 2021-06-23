import React, { useState } from "react";

function UpdateForm({ title, onUpdate }) {
  const [newTitle, setNewTitle] = useState(title);

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSaveClick = () => {
    if (title.length === 0) {
      alert("제목을 입력해주세요.");
      return;
    }

    onUpdate(newTitle);
  };

  return (
    <div>
      <h3>수정할 제목</h3>
      <input onChange={handleTitleChange} value={newTitle} />
      <button onClick={handleSaveClick}>저장</button>
    </div>
  );
}

export default UpdateForm;
