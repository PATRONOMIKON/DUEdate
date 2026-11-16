
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="logo-icon">✓</span>
        <h2>DUEdate</h2>
      </div>

      <p className="nav-heading">MENU</p>

      <nav className="navigation">
        <Link to="/" className="nav-link active">
          <span>▦</span> Dashboard
        </Link>

        <Link to="/assignments" className="nav-link">
          <span>▤</span> My Assignments
        </Link>

        <Link to="/calendar" className="nav-link">
          <span>▦</span> Calendar
        </Link>

        <Link to="/add-assignment" className="nav-link">
          <span>＋</span> Add Assignment
        </Link>

        <Link to="/resources" className="nav-link">
          <span>▣</span> Resources
        </Link>
      </nav>

      <div className="sidebar-footer">
        <p>Stay organized.</p>
        <strong>Stay ahead. 💙</strong>
      </div>
    </aside>
  );
}

export default Sidebar;
