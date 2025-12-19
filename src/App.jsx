import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./Routes";

function App() {
  let myRoutes = useRoutes(routes);
  return myRoutes;
}

export default App;
