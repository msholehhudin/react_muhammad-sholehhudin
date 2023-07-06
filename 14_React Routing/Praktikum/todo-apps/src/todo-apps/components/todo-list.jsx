import { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

export default function TodoList({ dataList, onDelete }) {
  const [isChecked, setIsChecked] = useState(dataList.completed);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDelete = () => {
    onDelete(dataList.id);
  };

  return (
    <>
      <div
        className="container d-flex flex-row justify-content-between mt-5  align-items-center"
        style={{ maxWidth: "500px" }}
      >
        <div className="d-flex flex-row gap-4">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckBoxChange}
          />

          <p
            style={{
              alignSelf: "center",
              margin: 0,
              textDecoration: isChecked ? "line-through" : "none",
              color: isChecked ? "gray" : "black",
              fontStyle: isChecked ? "italic" : "normal",
            }}
          >
            {dataList.title}
          </p>
        </div>

        <button className="btn btn-danger" onClick={handleDelete}>
          <RiDeleteBin5Fill />{" "}
        </button>
      </div>
      <hr
        className="container d-flex flex-row justify-content-between  align-items-center"
        style={{ maxWidth: "500px" }}
      />
    </>
  );
}
