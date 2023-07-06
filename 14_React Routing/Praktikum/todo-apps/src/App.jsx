import { useState } from "react";
import ToDo from "./todo-apps";
import { MockData } from "../MockData";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppAbout, Home, AuthorAbout } from "../Constant";
import AboutAuthor from "./pages/about-page/about-author";
import AboutApp from "./pages/about-page/about-app";

function App() {
  const [dataList, setDataList] = useState(MockData);

  const updateDataList = (updatedList) => {
    setDataList(updatedList);
  };

  const router = createBrowserRouter([
    {
      path: Home,
      element: <ToDo dataList={dataList} updateDataList={updateDataList} />,
    },
    {
      path: AppAbout,
      element: <AboutApp />,
    },
    {
      path: AuthorAbout,
      element: <AboutAuthor />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
