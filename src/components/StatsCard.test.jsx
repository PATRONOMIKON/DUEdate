
import { render, screen } from "@testing-library/react";
import StatsCard from "./StatsCard";

describe("StatsCard component", () => {
  test("displays the title and value", () => {
    render(
      <StatsCard
        title="Total Assignments"
        value={5}
        icon="📚"
        color="#E8F1FF"
        subtitle="All your coursework"
      />
    );

    expect(screen.getByText("Total Assignments")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("All your coursework")).toBeInTheDocument();
  });
});
