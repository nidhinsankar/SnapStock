import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h2>Sidebar</h2>
      <h3>navbar</h3>
      <Outlet />
      <div className="bg-red-400 font-bold text-center">
        <h3>SnapStock With Google sheets</h3>
      </div>
    </>
  );
}

export default App;
