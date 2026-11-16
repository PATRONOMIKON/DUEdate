
function Header() {
  return (
    <header className="header">
      <div>
        <h1>Dashboard</h1>
        <p>Welcome back! Here's your academic overview.</p>
      </div>

      <div className="header-profile">
        <div className="profile-avatar">S</div>
        <div>
          <strong>Student</strong>
          <p>My Workspace</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
