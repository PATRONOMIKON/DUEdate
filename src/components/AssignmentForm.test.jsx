
import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, test, expect } from "vitest";
import AssignmentForm from "./AssignmentForm";

describe("AssignmentForm component", () => {
  test("renders the assignment form fields", () => {
    render(<AssignmentForm onSubmit={vi.fn()} />);

    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/course/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/due date/i)).toBeInTheDocument();
  });

  test("submits the entered assignment details", () => {
    const handleSubmit = vi.fn();
    const { container } = render(
      <AssignmentForm onSubmit={handleSubmit} />
    );

    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: "Biology Homework" },
    });

    fireEvent.change(screen.getByLabelText(/course/i), {
      target: { value: "Biology" },
    });

    fireEvent.change(screen.getByLabelText(/due date/i), {
      target: { value: "2026-12-01" },
    });

    fireEvent.submit(container.querySelector("form"));

    expect(handleSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Biology Homework",
        course: "Biology",
        dueDate: "2026-12-01",
      })
    );
  });
});
