
const API_URL = "https://openlibrary.org/search.json";

export async function searchBooks(query) {
  const params = new URLSearchParams({
    q: query,
    fields: "key,title,author_name,first_publish_year,cover_i,edition_count",
    limit: "12",
  });

  const response = await fetch(`${API_URL}?${params}`);

  if (!response.ok) {
    throw new Error("Unable to fetch books. Please try again.");
  }

  const data = await response.json();

  return data.docs || [];
}
