
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Assignments from "./pages/Assignments";
import Calendar from "./pages/Calendar";
import AddAssignment from "./pages/AddAssignment";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function closeSidebar() {
    setSidebarOpen(false);
  }

  return (
    <div className="app-container">
      <button
        className="mobile-menu-button"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={sidebarOpen}
      >
        {sidebarOpen ? "✕" : "☰"}
      </button>

      {sidebarOpen && (
        <button
          className="sidebar-overlay"
          onClick={closeSidebar}
          aria-label="Close navigation menu"
        />
      )}

      <Sidebar isOpen={sidebarOpen} onNavigate={closeSidebar} />

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/add-assignment" element={<AddAssignment />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
