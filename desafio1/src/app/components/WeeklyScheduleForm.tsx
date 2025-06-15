import React from "react";
import type { FormValues } from "../types/formType";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type WeeklyScheduleFormProps = {
  initialData: FormValues | null;
  onSubmit(value: FormValues): void;
};

export function WeeklyScheduleForm({ initialData, onSubmit }: WeeklyScheduleFormProps) {
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
        onSubmit(data as FormValues);
      }}
    >
      {daysOfWeek.map((day) => {
        const hourKey = `${day}-hours` as keyof FormValues;
        const minutesKey = `${day}-minutes` as keyof FormValues;

        return (
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
                <label htmlFor={hourKey} style={{ display: "none" }}>
                  {day} Hours
                </label>
                <Input
                  id={hourKey}
                  defaultValue={initialData ? initialData[hourKey] : ""}
                  name={hourKey}
                  type="number"
                  placeholder="Hours"
                  min="0"
                  max="24"
                  style={{ minWidth: "5rem" }}
                />
              </div>
              <div>
                <label htmlFor={minutesKey} style={{ display: "none" }}>
                  {day} Minutes
                </label>
                <Input
                  id={minutesKey}
                  defaultValue={initialData ? initialData[minutesKey] : ""}
                  name={minutesKey}
                  type="number"
                  placeholder="Minutes"
                  min="0"
                  max="59"
                  style={{ minWidth: "5rem" }}
                />
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex flex-wrap items-center gap-2 md:flex-row justify-end">
        <Button type="submit" className="cursor-pointer" variant="secondary">
          Update
        </Button>
      </div>
    </form>
  );
}
