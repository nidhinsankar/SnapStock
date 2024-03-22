import { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Auth = () => {
  const [signInScreen, setSignInScreen] = useState<boolean>(false);
  return (
    <div className="w-full mt-[10%] flex justify-center items-center">
      <div className="flex flex-col w-[20%] bg-gray-100 px-4 py-2">
        <div className="flex px-1 py-1 bg-gray-200 rounded-3xl">
          <button
            onClick={() => setSignInScreen(true)}
            className={` w-[50%] ${
              signInScreen && "py-2  rounded-3xl  bg-white"
            } `}
          >
            SignIn
          </button>
          <button
            onClick={() => setSignInScreen(false)}
            className={` w-[50%] ${
              !signInScreen && "py-2 rounded-3xl bg-white"
            } `}
          >
            SignUp
          </button>
        </div>
        {signInScreen ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default Auth;
