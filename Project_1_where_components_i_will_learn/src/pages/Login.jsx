function Login() {
  return (
    <div className="loginContainer">
      <form className="formCard">
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
        />

        <button className="loginbutton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;