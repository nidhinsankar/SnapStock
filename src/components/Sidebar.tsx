import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="bg-red-500  text-white">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/auth"}>auth</Link>
        </li>
        <li>
          <Link to={"/store"}>store</Link>
        </li>
        <li>
          <Link to={"/cart"}>cart</Link>
        </li>
        <li>
          <Link to={"/checkout"}>checkout</Link>
        </li>
        <li>
          <Link to={"/product/34"}>ProductDetail</Link>
        </li>
        <li>
          <Link to={"/addproduct"}>addproduct</Link>
        </li>
        <li>
          <Link to={"/admin"}>admin</Link>
        </li>
        <li>
          <Link to={"/userdetail"}>userdetail</Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
