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
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="firstname" className="capitalize mt-4">
          first name
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="first name"
          className="rounded-md shadow-md focus:outline-none px-4 py-2"
          value={data.firstname}
          onChange={handleChange}
        />
        <label htmlFor="lastname" className="capitalize mt-4">
          last name{" "}
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="second name"
          className="rounded-md shadow-md focus:outline-none px-4 py-2"
          value={data.lastname}
          onChange={handleChange}
        />

        <label htmlFor="email" className="capitalize mt-4">
          email{" "}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="rounded-md shadow-md focus:outline-none px-4 py-2"
          value={data.email}
          onChange={handleChange}
        />

        <label htmlFor="password" className="capitalize mt-4">
          password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="rounded-md shadow-md focus:outline-none px-4 py-2"
          value={data.password}
          onChange={handleChange}
        />

        <button className="rounded-md shadow-md focus:outline-none px-4 py-2 bg-blue-400 mt-3">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default SignUp;
