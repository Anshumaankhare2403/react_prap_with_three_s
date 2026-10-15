import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(user));

    console.log("Saved:", user);
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-80 mt-20"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border-2 p-2"
          value={user.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border-2 p-2"
          value={user.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-2 p-2"
          value={user.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;