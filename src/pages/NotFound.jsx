
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="main-content not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>

      <Link to="/" className="back-home">
        Back to Dashboard
      </Link>
    </main>
  );
}

export default NotFound;
