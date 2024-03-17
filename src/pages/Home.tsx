import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to={"/store"} className="bg-red-500 text-white">
        go to store
      </Link>
    </div>
  );
};
export default Home;
