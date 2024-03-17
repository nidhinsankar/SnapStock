import React, { FormEvent, useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col border-2">
        <label htmlFor="firstname">
          first name
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="first name"
            className="border-2"
            value={data.firstname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastname">
          last name
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="second name"
            className="border-2"
            value={data.lastname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="border-2"
            value={data.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="border-2"
            value={data.password}
            onChange={handleChange}
          />
        </label>
        <button className="border-2">SUBMIT</button>
      </form>
    </div>
  );
};

export default SignUp;
