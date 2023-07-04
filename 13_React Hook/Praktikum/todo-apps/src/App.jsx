import { useState } from "react";
import ToDo from "./todo-apps";
import { MockData } from "../MockData";

function App() {
  const [dataList, setDataList] = useState(MockData);

  const updateDataList = (updatedList) => {
    setDataList(updatedList);
  };

  return (
    <>
      <ToDo dataList={dataList} updateDataList={updateDataList} />
    </>
  );
}

export default App;
