
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAssignments } from "../context/AssignmentContext";

function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function Calendar() {
  const { assignments } = useAssignments();

  const [currentMonth, setCurrentMonth] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState(() => new Date());

  const todayKey = getDateKey(new Date());
  const selectedKey = getDateKey(selectedDate);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  // Find the first day of the month.
  const firstDay = new Date(year, month, 1);

  // Make Monday the first day of the week.
  const startingDay = (firstDay.getDay() + 6) % 7;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Calculate enough calendar cells to display every day.
  const totalCells =
    Math.ceil((startingDay + daysInMonth) / 7) * 7;

  const calendarDays = Array.from(
    { length: totalCells },
    (_, index) =>
      new Date(year, month, index - startingDay + 1)
  );

  const selectedAssignments = assignments.filter(
    (assignment) => assignment.dueDate === selectedKey
  );

  function changeMonth(amount) {
    const newMonth = new Date(year, month + amount, 1);

    setCurrentMonth(newMonth);
    setSelectedDate(newMonth);
  }

  function goToToday() {
    const today = new Date();

    setCurrentMonth(today);
    setSelectedDate(today);
  }

  function getAssignmentsForDay(date) {
    const dateKey = getDateKey(date);

    return assignments.filter(
      (assignment) => assignment.dueDate === dateKey
    );
  }

  return (
    <main className="main-content">
      <div className="calendar-heading">
        <div>
          <h1>Calendar</h1>
          <p className="page-description">
            Keep track of your assignment deadlines.
          </p>
        </div>

        <Link to="/add-assignment" className="calendar-add-button">
          + Add Assignment
        </Link>
      </div>

      <section className="calendar-container">
        <div className="calendar-toolbar">
          <div className="calendar-month-controls">
            <button
              type="button"
              onClick={() => changeMonth(-1)}
              aria-label="Previous month"
            >
              ‹
            </button>

            <h2>
              {currentMonth.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </h2>

            <button
              type="button"
              onClick={() => changeMonth(1)}
              aria-label="Next month"
            >
              ›
            </button>
          </div>

          <button
            type="button"
            className="calendar-today-button"
            onClick={goToToday}
          >
            Today
          </button>
        </div>

        <div className="calendar-grid">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
            (day) => (
              <div className="calendar-weekday" key={day}>
                {day}
              </div>
            )
          )}

          {calendarDays.map((date) => {
            const dateKey = getDateKey(date);
            const dayAssignments = getAssignmentsForDay(date);

            const isCurrentMonth = date.getMonth() === month;
            const isToday = dateKey === todayKey;
            const isSelected = dateKey === selectedKey;

            return (
              <button
                type="button"
                key={dateKey}
                className={[
                  "calendar-day",
                  !isCurrentMonth ? "outside-month" : "",
                  isToday ? "today" : "",
                  isSelected ? "selected-day" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => setSelectedDate(date)}
                aria-label={`${date.toDateString()}, ${dayAssignments.length} assignments`}
                aria-pressed={isSelected}
              >
                <span className="calendar-day-number">
                  {date.getDate()}
                </span>

                {dayAssignments.length > 0 && (
                  <div className="calendar-day-assignments">
                    {dayAssignments.slice(0, 2).map((assignment) => (
                      <span
                        key={assignment.id}
                        className={`calendar-event priority-${assignment.priority.toLowerCase()}`}
                        title={assignment.title}
                      >
                        {assignment.title}
                      </span>
                    ))}

                    {dayAssignments.length > 2 && (
                      <span className="calendar-more">
                        +{dayAssignments.length - 2} more
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </section>

      <section className="selected-date-section">
        <h2>
          Assignments for{" "}
          {selectedDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h2>

        {selectedAssignments.length === 0 ? (
          <div className="empty-message">
            No assignments due on this date.
          </div>
        ) : (
          <div className="selected-date-list">
            {selectedAssignments.map((assignment) => (
              <article
                className="selected-date-card"
                key={assignment.id}
              >
                <div>
                  <h3>{assignment.title}</h3>
                  <p>{assignment.course}</p>
                </div>

                <div className="selected-date-labels">
                  <span
                    className={`priority-${assignment.priority.toLowerCase()}`}
                  >
                    {assignment.priority} priority
                  </span>

                  <span>{assignment.status}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Calendar;
