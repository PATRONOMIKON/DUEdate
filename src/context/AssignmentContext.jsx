
import { createContext, useContext, useState } from "react";

const AssignmentContext = createContext();

export function AssignmentProvider({ children }) {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Research Paper",
      course: "Biology",
      description: "Research cell structures",
      dueDate: "2026-11-20",
      priority: "High",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Chapter 5 Exercises",
      course: "Mathematics",
      description: "Complete exercises 1-15",
      dueDate: "2026-11-22",
      priority: "Medium",
      status: "Not Started",
    },
    {
      id: 3,
      title: "History Presentation",
      course: "History",
      description: "Prepare presentation slides",
      dueDate: "2026-11-25",
      priority: "Low",
      status: "In Progress",
    },
  ]);

  // Add a new assignment
  const addAssignment = (assignment) => {
    const newAssignment = {
      ...assignment,
      id: crypto.randomUUID(),
    };

    setAssignments((previous) => [
      ...previous,
      newAssignment,
    ]);
  };

  // Edit an existing assignment
  const updateAssignment = (id, updatedData) => {
    setAssignments((previous) =>
      previous.map((assignment) =>
        assignment.id === id
          ? { ...assignment, ...updatedData }
          : assignment
      )
    );
  };

  // Delete an assignment
  const deleteAssignment = (id) => {
    setAssignments((previous) =>
      previous.filter((assignment) => assignment.id !== id)
    );
  };

  return (
    <AssignmentContext.Provider
      value={{
        assignments,
        addAssignment,
        updateAssignment,
        deleteAssignment,
      }}
    >
      {children}
    </AssignmentContext.Provider>
  );
}

// Custom hook for accessing assignment data
export function useAssignments() {
  const context = useContext(AssignmentContext);

  if (!context) {
    throw new Error(
      "useAssignments must be used inside AssignmentProvider"
    );
  }

  return context;
}
