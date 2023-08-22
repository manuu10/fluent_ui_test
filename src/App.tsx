import { Sidebar } from "./components/core/sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <Sidebar />
      <main style={{ padding: "1.5rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
