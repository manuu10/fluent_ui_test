import { Button } from "@fluentui/react-components";
import { Sidebar } from "./components/core/sidebar";
import { BookTimePage } from "./components/book_time";
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
