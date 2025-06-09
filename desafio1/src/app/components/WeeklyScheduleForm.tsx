import React from "react";

type WeeklyScheduleFormProps = {
  onSubmit(value: any): void;
};

export function WeeklyScheduleForm({ onSubmit }: WeeklyScheduleFormProps) {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <form
      style={{
        marginTop: "1rem",
        gap: "1.5rem",
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        onSubmit(data);
      }}
    >
      {daysOfWeek.map((day) => (
        <div
          key={day}
          style={{
            display: "flex",
            minWidth: "18rem",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span>{day}:</span>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <div>
              <label htmlFor={`${day}-hours`} style={{ display: "none" }}>
                {day} Hours
              </label>
              <input
                id={`${day}-hours`}
                name={`${day}-hours`}
                type="number"
                placeholder="Hours"
                min="0"
                max="24"
                style={{ minWidth: "5rem" }}
              />
            </div>
            <div>
              <label htmlFor={`${day}-minutes`} style={{ display: "none" }}>
                {day} Minutes
              </label>
              <input
                id={`${day}-minutes`}
                name={`${day}-minutes`}
                type="number"
                placeholder="Minutes"
                min="0"
                max="59"
                style={{ minWidth: "5rem" }}
              />
            </div>
          </div>
        </div>
      ))}
      <button type="submit" style={{ cursor: "pointer" }}>
        Submit
      </button>
    </form>
  );
}
