# DUEdate – Student Assignment Tracker

DUEdate is a student productivity web application designed to help students organize their academic workload, manage assignment deadlines, and discover useful study resources.

## Features

- **Dashboard:** View assignment statistics and upcoming deadlines.
- **Assignment Management:** Create, edit, search, filter, and delete assignments.
- **Calendar:** View assignments by their due dates.
- **Study Resources:** Search for educational books using the Open Library API.
- **Responsive Design:** Use the application on desktop, tablet, and mobile devices.
- **State Management:** Share assignment data across pages using React Context API.

## Technologies Used

- React
- JavaScript
- Vite
- React Router
- React Context API
- CSS
- Open Library API
- Vitest
- React Testing Library

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd DUEdate
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## Testing

Run the unit tests:

```bash
npm run test:run
```

Run the production build:

```bash
npm run build
```

## External API

DUEdate integrates with the Open Library Search API to retrieve book information.

API documentation: https://openlibrary.org/developers/api

## Project Structure

```text
src/
├── components/
├── context/
├── pages/
├── services/
├── test/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Future Improvements

- Save assignments between browser sessions.
- Add user authentication.
- Add assignment reminders and notifications.
- Improve calendar navigation.
- Add more educational resource providers.

## Author

Bohdan Olefirenko

## License

This project is created for educational purposes.