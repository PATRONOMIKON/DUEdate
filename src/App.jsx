
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="page-container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
