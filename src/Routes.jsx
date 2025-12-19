import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Course from "./pages/course/Course";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  {
    path: "/blog",
    element: <Blog />,
    children: [
      { path: "php", element: <h2>PHP بهترین است</h2> },
      { path: "java", element: <h2>java بهترین است</h2> },
      { path: "python", element: <h2>python بهترین است</h2> },
    ],
  },
  { path: "/panel", element: <Panel /> },
  { path: "/course/:courseID", element: <Course /> },

];

export default routes