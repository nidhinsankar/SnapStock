import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>

      <Link to={"/auth"}>auth</Link>
      <Link to={"/store"}>store</Link>
      <Link to={"/cart"}>cart</Link>
      <Link to={"/checkout"}>checkout</Link>
      <Link to={"/product/34"}>ProductDetail</Link>
      <Link to={"/addproduct"}>addproduct</Link>
      <Link to={"/admin"}>admin</Link>
      <Link to={"/userdetail"}>userdetail</Link>
    </div>
  );
};

export default Links;
