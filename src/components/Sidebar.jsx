
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, onNavigate }) {
  const links = [
    { to: "/", label: "Dashboard", icon: "🏠", end: true },
    { to: "/assignments", label: "My Assignments", icon: "📚" },
    { to: "/calendar", label: "Calendar", icon: "📅" },
    { to: "/add-assignment", label: "Add Assignment", icon: "＋" },
    { to: "/resources", label: "Resources", icon: "🔎" },
  ];

  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-logo">
        <h1>DUEdate</h1>
        <p>Student Planner</p>
      </div>

      <nav className="sidebar-nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className="nav-link"
            onClick={onNavigate}
          >
            <span className="nav-icon">{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p>Stay organized. Stay ahead.</p>
      </div>
    </aside>
  );
}

export default Sidebar;
