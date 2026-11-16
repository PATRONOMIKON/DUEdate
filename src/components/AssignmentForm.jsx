
import { useState } from "react";

function AssignmentForm({
  initialData,
  onSubmit,
  onCancel,
  submitLabel = "Add Assignment",
}) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    course: initialData?.course || "",
    description: initialData?.description || "",
    dueDate: initialData?.dueDate || "",
    priority: initialData?.priority || "Medium",
    status: initialData?.status || "Not Started",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);
  };

  return (
    <form className="assignment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Assignment Title</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g. Research Paper"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="course">Course / Subject</label>
        <input
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="e.g. Biology"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Assignment details..."
          rows="4"
        />
      </div>

      <div className="form-group">
        <label htmlFor="dueDate">Due Date</label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="primary-button">
          {submitLabel}
        </button>

        {onCancel && (
          <button
            type="button"
            className="secondary-button"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default AssignmentForm;
