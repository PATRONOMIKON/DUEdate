
function AssignmentCard({ assignment }) {
  const isOverdue =
    new Date(assignment.dueDate) < new Date() &&
    assignment.status !== "Completed";

  return (
    <div className="assignment-card">
      <div className="assignment-info">
        <h3>{assignment.title}</h3>
        <p>{assignment.course}</p>
        <small>
          Due: {assignment.dueDate}
        </small>
      </div>

      <div className="assignment-labels">
        <span className={`priority ${assignment.priority.toLowerCase()}`}>
          {assignment.priority}
        </span>

        <span className={`status ${assignment.status.toLowerCase().replace(" ", "-")}`}>
          {assignment.status}
        </span>

        {isOverdue && (
          <span className="overdue">Overdue</span>
        )}
      </div>
    </div>
  );
}

export default AssignmentCard;
