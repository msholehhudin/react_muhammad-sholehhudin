import Sidebar from "./sidebar/sidebar";
import "./about.css";

export default function About({ children }) {
  return (
    <div className="about-container">
      <Sidebar />
      <div className="about">{children}</div>
    </div>
  );
}
