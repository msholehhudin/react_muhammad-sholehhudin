import { useState } from "react";
import ToDo from "./todo-apps";
import { MockData } from "../MockData";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./global/layout/Layout";

function App() {
  const [dataList, setDataList] = useState(MockData);

  const updateDataList = (updatedList) => {
    setDataList(updatedList);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ToDo dataList={dataList} updateDataList={updateDataList} />,
    },
    {
      path: "/about",
      element: <div>About Page</div>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
