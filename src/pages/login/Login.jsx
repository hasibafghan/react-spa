import "./Login.css";
import { useState } from "react";
import MyNavbar from "../../components/navbar/Navbar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const redirect = useNavigate();

  const submitHandler = () => {
    if (username == "admin" && password == "12345") {
      document.cookie = "username=admin; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";
      redirect("/panel");
    } else {
      Swal.fire({
        title: "خطا در لاگین!",
        text: "نام کاربری یا رمز عبور اشتباه است.",
        icon: "error",
        confirmButtonText: "باشه",
      });
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <button type="button" onClick={submitHandler}>
              login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
