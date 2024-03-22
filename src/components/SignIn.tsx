import { useForm } from "react-hook-form";

const SignIn = () => {
  const formvlaues = useForm();

  console.log(formvlaues.formState);

  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="email" className="capitalize mt-4">
          email
        </label>
        <input
          type="email"
          {...formvlaues.register("email")}
          className="rounded-md shadow-md focus:outline-none px-4 py-2"
          placeholder="enter email"
        />
        <label htmlFor="password" className="capitalize mt-4">
          password
        </label>
        <input
          type="password"
          className="rounded-md shadow-md focus:outline-none px-4 py-2"
          placeholder="enter password"
        />
        <button className="rounded-md shadow-md px-4 py-2 bg-blue-300 mt-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
