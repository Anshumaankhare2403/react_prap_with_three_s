import { useState } from "react";
import fs from "fs";

function Forms() {
  const [Form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  function handleForms(e) {
    e.preventDefault();

    const form = e.target.form;
    const user = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      age: form.age.value,
    };

    setForm(user);

    // If fs existed (it doesn't in React)
    fs.writeFile("user.json", JSON.stringify(user, null, 2));
    console.log(JSON.stringify(user, null, 2))
  }

  return (
    <>
      <form className="grid gap-1 justify-center mx-100 mt-30 rounded-2xl h-100 pt-10">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="px-5 rounded-2xl h-12 bg-amber-100 w-120"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="px-5 rounded-2xl h-12 bg-amber-100 w-120"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="px-5 rounded-2xl h-12 bg-amber-100 w-120"
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          placeholder="Age"
          min={1}
          max={200}
          className="px-5 rounded-2xl h-12 bg-amber-100 w-120"
        />

        <button
          type="submit"
          className="bg-amber-100 rounded-2xl h-10 mt-5"
          onClick={handleForms}
        >
          Submit
        </button>
      </form>

      <div className="mt-10 text-center">
        <h2>Submitted Data</h2>

        <p>Name: {Form.name}</p>
        <p>Email: {Form.email}</p>
        <p>Password: {Form.password}</p>
        <p>Age: {Form.age}</p>
      </div>
    </>
  );
}

export default Forms;
