import Sidebar from "./sidebar/sidebar";
import "./style-layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="todo">{children}</div>
    </div>
  );
}
