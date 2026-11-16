
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import UpcomingAssignments from "../components/UpcomingAssignments";

function Dashboard() {
  const assignments = [
    {
      id: 1,
      title: "Research Paper",
      course: "Biology",
      dueDate: "2026-11-20",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Chapter 5 Exercises",
      course: "Mathematics",
      dueDate: "2026-11-22",
      priority: "Medium",
      status: "Not Started",
    },
    {
      id: 3,
      title: "History Presentation",
      course: "History",
      dueDate: "2026-11-25",
      priority: "Low",
      status: "In Progress",
    },
  ];

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
          value="12"
          icon="📚"
          color="#E8F1FF"
          subtitle="All your coursework"
        />

        <StatsCard
          title="Completed"
          value="5"
          icon="✓"
          color="#E6F8EF"
          subtitle="Great job!"
        />

        <StatsCard
          title="In Progress"
          value="4"
          icon="⌛"
          color="#FFF4DF"
          subtitle="Keep going"
        />

        <StatsCard
          title="Upcoming"
          value="3"
          icon="📅"
          color="#F0EAFF"
          subtitle="Deadlines approaching"
        />
      </section>

      <UpcomingAssignments assignments={assignments} />
    </main>
  );
}

export default Dashboard;
