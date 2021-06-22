import { useState } from "react";

const AddForm = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSaveClick = () => {
    if (title.length === 0) {
      alert("제목을 입력해주세요.");
      return;
    }

    onSave(title).then(() => {
      setTitle("");
    });
  };

  return (
    <div>
      <input onChange={handleTitleChange} value={title} />
      <button onClick={handleSaveClick}>저장</button>
    </div>
  );
};

export default AddForm;
