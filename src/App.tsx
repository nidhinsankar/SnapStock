import { Outlet } from "react-router-dom";
import Links from "./components/Sidebar";

function App() {
  return (
    <div className="flex bg-blue-700">
      <div>
        <h2>Sidebar</h2>
        <h3>navbar</h3>
        <Links />
      </div>
      <div className="bg-blue-300">
        <Outlet />
        <div className="bg-red-400 text-white font-bold">
          <h3>SnapStock With Google sheets</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
