import { useState } from "react";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../storage/slices/todos";

export default function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.dataList);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSubmit = () => {
    const trimmedInputValue = inputValue.trim();
    if (trimmedInputValue !== "") {
      const newItem = {
        id: dataList.length + 1,
        title: inputValue,
        completed: false,
      };
      dispatch(addItem(newItem));
    } else {
      alert(
        "Input masih kosong nih, Silahkan masukkan Todo anda terlebih dahulu !"
      );
    }
    setInputValue("");
  };

  const handleDelete = (itemId) => {
    const confirmation = window.confirm(
      "Apakah anda yakin ingin menghapus data ini ?"
    );

    if (confirmation) {
      dispatch(deleteItem(itemId));
    }
  };

  return (
    <div>
      <TodoInput
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        value={inputValue}
      />

      {dataList.map((data) => (
        <TodoList key={data.id} dataList={data} onDelete={handleDelete} />
      ))}
    </div>
  );
}
