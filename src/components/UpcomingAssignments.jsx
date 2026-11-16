
import AssignmentCard from "./AssignmentCard";

function UpcomingAssignments({ assignments }) {
  return (
    <section className="upcoming-section">
      <div className="section-heading">
        <div>
          <h2>Upcoming Assignments</h2>
          <p>Keep track of what's coming next.</p>
        </div>
      </div>

      {assignments.length > 0 ? (
        assignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
          />
        ))
      ) : (
        <p>No upcoming assignments. You're all caught up!</p>
      )}
    </section>
  );
}

export default UpcomingAssignments;
