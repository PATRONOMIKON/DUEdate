
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="logo-icon">✓</span>
        <h2>DUEdate</h2>
      </div>

      <p className="nav-heading">MENU</p>

      <nav className="navigation">
        <NavLink to="/" end className="nav-link">
          <span>▦</span> Dashboard
        </NavLink>

        <NavLink to="/assignments" className="nav-link">
          <span>▤</span> My Assignments
        </NavLink>

        <NavLink to="/calendar" className="nav-link">
          <span>▦</span> Calendar
        </NavLink>

        <NavLink to="/add-assignment" className="nav-link">
          <span>＋</span> Add Assignment
        </NavLink>

        <NavLink to="/resources" className="nav-link">
          <span>▣</span> Resources
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <p>Stay organized.</p>
        <strong>Stay ahead. 💙</strong>
      </div>
    </aside>
  );
}

export default Sidebar;
