import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Auth = () => {
  return (
    <div className="flex">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
