
import { useState } from "react";
import { searchBooks } from "../services/bookApi";

function Resources() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch(event) {
    event.preventDefault();

    if (!query.trim()) {
      setError("Please enter a subject or book title.");
      return;
    }

    setLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const results = await searchBooks(query.trim());
      setBooks(results);
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="main-content">
      <h1>Study Resources</h1>
      <p className="page-description">
        Discover books and learning materials for your courses.
      </p>

      <form className="resource-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search biology, mathematics, history..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search Books"}
        </button>
      </form>

      {error && <p className="resource-error">{error}</p>}

      {loading && (
        <p className="resource-message">Loading books...</p>
      )}

      {!loading && hasSearched && books.length === 0 && !error && (
        <p className="resource-message">
          No books found. Try another search.
        </p>
      )}

      <section className="resource-grid">
        {books.map((book) => (
          <article className="resource-card" key={book.key}>
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={`Cover of ${book.title}`}
              />
            ) : (
              <div className="book-placeholder">📚</div>
            )}

            <div className="resource-card-info">
              <h3>{book.title}</h3>

              <p>
                {book.author_name?.slice(0, 2).join(", ") ||
                  "Unknown author"}
              </p>

              <small>
                {book.first_publish_year || "Publication year unavailable"}
              </small>

              <a
                href={`https://openlibrary.org${book.key}`}
                target="_blank"
                rel="noreferrer"
              >
                View book
              </a>
            </div>
          </article>
        ))}
      </section>

      <p className="resource-attribution">
        Book information and covers provided by Open Library.
      </p>
    </main>
  );
}

export default Resources;
