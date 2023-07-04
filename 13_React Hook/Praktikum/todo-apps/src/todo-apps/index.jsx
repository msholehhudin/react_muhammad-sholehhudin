import { useState } from "react";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";

export default function ToDo({ dataList, updateDataList }) {
  const [inputValue, setInputValue] = useState("");

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
      const updatedDataList = [...dataList, newItem];
      updateDataList(updatedDataList);
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
      const updatedDataList = dataList.filter((item) => item.id !== itemId);
      updateDataList(updatedDataList);
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
