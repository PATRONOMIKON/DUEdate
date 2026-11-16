
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import UpcomingAssignments from "../components/UpcomingAssignments";
import { useAssignments } from "../context/AssignmentContext";

function Dashboard() {
  const { assignments } = useAssignments();

  const today = new Date().toISOString().split("T")[0];

  const totalAssignments = assignments.length;

  const completedAssignments = assignments.filter(
    (assignment) => assignment.status === "Completed"
  ).length;

  const inProgressAssignments = assignments.filter(
    (assignment) => assignment.status === "In Progress"
  ).length;

  const upcomingAssignments = assignments.filter(
    (assignment) =>
      assignment.status !== "Completed" &&
      assignment.dueDate >= today
  );

  const sortedUpcoming = [...upcomingAssignments]
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
    .slice(0, 3);

  return (
    <main className="main-content">
      <Header />

      <section className="welcome-section">
        <h2>Your academic life, organized.</h2>
        <p>
          Stay on top of your assignments and never
          miss a deadline.
        </p>
      </section>

      <section className="stats-grid">
        <StatsCard
          title="Total Assignments"
          value={totalAssignments}
          icon="📚"
          color="#E8F1FF"
          subtitle="All your coursework"
        />

        <StatsCard
          title="Completed"
          value={completedAssignments}
          icon="✓"
          color="#E6F8EF"
          subtitle="Great job!"
        />

        <StatsCard
          title="In Progress"
          value={inProgressAssignments}
          icon="⌛"
          color="#FFF4DF"
          subtitle="Keep going"
        />

        <StatsCard
          title="Upcoming"
          value={upcomingAssignments.length}
          icon="📅"
          color="#F0EAFF"
          subtitle="Deadlines approaching"
        />
      </section>

      <UpcomingAssignments assignments={sortedUpcoming} />
    </main>
  );
}

export default Dashboard;
