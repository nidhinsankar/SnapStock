import { useForm } from "react-hook-form";

const SignIn = () => {
  const formvlaues = useForm();

  console.log(formvlaues.formState);

  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="email">email</label>
        <input
          type="email"
          {...formvlaues.register("email")}
          className="border-2"
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          className="border-2"
          placeholder="enter password"
        />
      </form>
    </div>
  );
};

export default SignIn;
