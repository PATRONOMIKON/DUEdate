
import { useState } from "react";
import AssignmentForm from "../components/AssignmentForm";
import { useAssignments } from "../context/AssignmentContext";

function Assignments() {
  const {
    assignments,
    updateAssignment,
    deleteAssignment,
  } = useAssignments();

  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredAssignments = assignments.filter(
    (assignment) => {
      const matchesSearch =
        assignment.title.toLowerCase().includes(search.toLowerCase()) ||
        assignment.course.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || assignment.status === filter;

      return matchesSearch && matchesFilter;
    }
  );

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this assignment?"
    );

    if (confirmed) {
      deleteAssignment(id);
    }
  };

  return (
    <main className="main-content">
      <h1>My Assignments</h1>

      <p className="page-description">
        Manage all your school assignments in one place.
      </p>

      <div className="assignment-toolbar">
        <input
          type="search"
          placeholder="Search assignments..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <section className="assignment-list">
        {filteredAssignments.length === 0 ? (
          <p className="empty-message">
            No assignments found.
          </p>
        ) : (
          filteredAssignments.map((assignment) => (
            <div className="managed-assignment" key={assignment.id}>
              {editingId === assignment.id ? (
                <AssignmentForm
                  initialData={assignment}
                  submitLabel="Save Changes"
                  onSubmit={(data) => {
                    updateAssignment(assignment.id, data);
                    setEditingId(null);
                  }}
                  onCancel={() => setEditingId(null)}
                />
              ) : (
                <>
                  <div className="managed-assignment-info">
                    <h3>{assignment.title}</h3>
                    <p>{assignment.course}</p>
                    <p>{assignment.description}</p>
                    <small>Due: {assignment.dueDate}</small>

                    <div className="assignment-labels">
                      <span className={`priority ${assignment.priority.toLowerCase()}`}>
                        {assignment.priority}
                      </span>

                      <span className={`status ${assignment.status.toLowerCase().replace(" ", "-")}`}>
                        {assignment.status}
                      </span>
                    </div>
                  </div>

                  <div className="assignment-actions">
                    <button
                      className="edit-button"
                      onClick={() => setEditingId(assignment.id)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-button"
                      onClick={() => handleDelete(assignment.id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </section>
    </main>
  );
}

export default Assignments;
