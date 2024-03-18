import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="ml-[20%] pl-[3%] h-screen w-full bg-red-300">
        {/* <Navbar /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
