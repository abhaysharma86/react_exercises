import React, { useState } from "react";

const Form = () => {
  // option: 1
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");

  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name + " : " + value);

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormIncomplete = Object.values(user).some(
      (value) => value.trim() === ""
    );

    // user.name === "" || user.age === "" || user.email === ""

    if (isFormIncomplete) {
      console.log("Please fill the form");
    } else {
      console.log("Form Submitted:", user);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          // value={name}  with option 1
          // onChange={(e) => setName(e.target.value)} // Update name state with option 1
          value={user.name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="text"
          // value={age} with option 1
          // onChange={(e) => setAge(e.target.value)} // Update age state with option 1
          value={user.age}
          name="age"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          // value={email} with option 1
          // onChange={(e) => setEmail(e.target.value)} // Update email state with option 1
          value={user.email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
