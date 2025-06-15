"use client";
import { useState } from "react";
import { SearchForm } from "../components/SearchForm";
import { WeeklyScheduleForm } from "../components/WeeklyScheduleForm";
import type { FormValues } from "../types/formType";
import useGetFromLocalStorage from "../hooks/useGetFromLocalStorage";
import useSaveToLocalStorage from "../hooks/useSaveToLocalStorage";
import { getMinutesByHours } from "@/lib/timeHelper";
import { FREE_TIME_LOCAL_STORAGE_KEY } from "../constants/localStorageKeys";

export default function Page() {
  const saveAvailableTime = useSaveToLocalStorage();

  const getInitialValues = useGetFromLocalStorage();
  //TODO: Remove form state via use state and add yup + react-hook-form
  const [freeTimeInMinutes, setFreeTimeInMinutes] = useState<number | null>(null);
  const [formStep, setFormStep] = useState(1);

  function onSubmit(values: FormValues) {
    const daysOfTheWeek = Object.keys(values);
    let availableTime = 0;

    daysOfTheWeek.forEach((d) => {
      if (d.includes("minutes")) {
        const minutesToAdd = +values[d as keyof FormValues];
        availableTime += minutesToAdd;
      } else {
        availableTime += getMinutesByHours(+values[d as keyof FormValues]);
      }
    });

    setFreeTimeInMinutes(availableTime);
    saveAvailableTime(FREE_TIME_LOCAL_STORAGE_KEY, JSON.stringify(values));
    setFormStep(2);
  }

  return (
    <div>
      <div>
        <h3 style={{ textDecoration: "underline", marginBottom: "3rem" }}>Week:</h3>
        <WeeklyScheduleForm onSubmit={onSubmit} initialData={getInitialValues(FREE_TIME_LOCAL_STORAGE_KEY) ?? null} />
      </div>
      <div style={{ minHeight: "3rem" }}>
        {freeTimeInMinutes && <h4>Total free time in minutes: {freeTimeInMinutes}</h4>}
      </div>
      <div>
        <h3>Search videos</h3>
        <SearchForm
          onSubmit={(values) => {
            console.log(values);
          }}
        />
      </div>
    </div>
  );
}
