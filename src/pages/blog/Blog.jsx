import { Link, Outlet } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import "./Blog.css";

function Blog() {
  return (
    <>
      <MyNavbar />

      <div className="blog">
        <div>
          <h1 style={{ marginTop: "10px" }}>صفحه مقالات</h1>
          <hr />
          <Link to="php" className="linkBtn">PHP</Link>
          <Link to="java" className="linkBtn">Java</Link>
          <Link to="python" className="linkBtn">Python</Link>
          <hr />
        </div>
        
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Blog;
