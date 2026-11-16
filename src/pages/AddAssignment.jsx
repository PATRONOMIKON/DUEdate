
import { useNavigate } from "react-router-dom";
import AssignmentForm from "../components/AssignmentForm";
import { useAssignments } from "../context/AssignmentContext";

function AddAssignment() {
  const { addAssignment } = useAssignments();
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    addAssignment(formData);
    navigate("/assignments");
  };

  return (
    <main className="main-content">
      <h1>Add Assignment</h1>

      <p className="page-description">
        Add a new assignment to your academic planner.
      </p>

      <section className="form-container">
        <h2>＋ New Assignment</h2>

        <AssignmentForm
          onSubmit={handleSubmit}
        />
      </section>
    </main>
  );
}

export default AddAssignment;
