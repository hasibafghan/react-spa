import { Navigate } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import "./Panel.css";

function Panel() {
  const isLogin = (username) => {
    if (username == "admin") return true;
    return false;
  };

  return (
    <>
      {isLogin("adsmin") ? (
        <div>
          <MyNavbar />

          <h1>Panel Page</h1>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Panel;
