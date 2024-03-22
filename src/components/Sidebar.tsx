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
        <Link
          to={"/"}
          className="font-bold text-xl flex justify-between shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200"
        >
          <li>Home</li>
          <IoHomeOutline />
        </Link>
        <Link
          to={"/auth"}
          className="font-bold text-xl flex justify-between  shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200"
        >
          <li>auth</li>
          <PiSignInFill />
        </Link>
        <Link
          to={"/store"}
          className="font-bold text-xl flex justify-between  shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200"
        >
          <li>store</li>
          <MdOutlineStorefront />
        </Link>
        <Link
          to={"/cart"}
          className="font-bold text-xl flex justify-between  shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200"
        >
          <li>cart</li>
          <FaShoppingCart />
        </Link>
        <Link
          to={"/checkout"}
          className="font-bold text-xl flex justify-between  shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200"
        >
          <li>checkout</li>
          <IoBagCheckOutline />
        </Link>
        <Link
          to={"/addproduct"}
          className="font-bold text-xl flex justify-between  shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200"
        >
          <li>addproduct</li>
          <MdAddCard />
        </Link>
        <Link
          to={"/admin"}
          className="font-bold text-xl flex justify-between  shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200"
        >
          <li>admin</li>
          <RiAdminFill />
        </Link>
        <Link
          to={"/userdetail"}
          className="font-bold text-xl flex justify-between  shadow-lg px-4 bg-slate-100 items-center py-3 my-3 rounded-xl hover:bg-blue-200"
        >
          <li>userdetail</li>
          <FaRegUser />
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
