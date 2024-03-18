import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { PiSignInFill } from "react-icons/pi";
import { MdOutlineStorefront } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdAddCard } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 bottom-0 w-[300px]  bg-blue-200 flex flex-col px-3">
      <h2 className="py-4 font-bold text-2xl">SNAPSTOCK</h2>
      <ul className="mt-4">
        <li className="font-bold text-xl flex justify-between shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200">
          <Link to={"/"}>Home</Link>
          <IoHomeOutline />
        </li>
        <li className="font-bold text-xl flex justify-between  shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200">
          <Link to={"/auth"}>auth</Link>
          <PiSignInFill />
        </li>
        <li className="font-bold text-xl flex justify-between  shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200">
          <Link to={"/store"}>store</Link>
          <MdOutlineStorefront />
        </li>
        <li className="font-bold text-xl flex justify-between  shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200">
          <Link to={"/cart"}>cart</Link>
          <FaShoppingCart />
        </li>
        <li className="font-bold text-xl flex justify-between  shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200">
          <Link to={"/checkout"}>checkout</Link>
          <IoBagCheckOutline />
        </li>
        <li className="font-bold text-xl flex justify-between  shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200">
          <Link to={"/addproduct"}>addproduct</Link>
          <MdAddCard />
        </li>
        <li className="font-bold text-xl flex justify-between  shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200">
          <Link to={"/admin"}>admin</Link>
          <RiAdminFill />
        </li>
        <li className="font-bold text-xl flex justify-between  shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200">
          <Link to={"/userdetail"}>userdetail</Link>
          <FaRegUser />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
