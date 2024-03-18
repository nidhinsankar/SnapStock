import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Link
        to={"/store"}
        className="p-2 bg-blue-400 font-medium rounded-sm hover:bg-blue-300"
      >
        Go To Store
      </Link>
    </div>
  );
};
export default Home;
