import { useState } from "react";
import jwt from "jsonwebtoken";



function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const tempUser = {
    email: "admin@gmail.com",
    password: "123456",
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      email === tempUser.email &&
      password === tempUser.password
    ) {
      alert("Login Successful");
      onLogin();
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="loginContainer">
      <form className="formCard" onSubmit={handleLogin}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="loginbutton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
