"use client";
import { getMinutesByHours } from "@/lib/timeHelper";
import { WeeklyScheduleForm } from "./components/WeeklyScheduleForm";
import styles from "./page.module.css";
import type { FormValues } from "./types/formType";
import { useState } from "react";
import useSaveToLocalStorage from "./hooks/useSaveToLocalStorage";
import useGetFromLocalStorage from "./hooks/useGetFromLocalStorage";
import { FREE_TIME_LOCAL_STORAGE_KEY } from "./constants/localStorageKeys";

export default function Home() {
  const saveAvailableTime = useSaveToLocalStorage();
  const getInitialValues = useGetFromLocalStorage();
  const [freeTimeInMinutes, setFreeTimeInMinutes] = useState(0);

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
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <h3 style={{ textDecoration: "underline", marginBottom: "3rem" }}>Week:</h3>
          <WeeklyScheduleForm onSubmit={onSubmit} initialData={getInitialValues(FREE_TIME_LOCAL_STORAGE_KEY) ?? null} />
        </div>
        <div>
          <h4>Total free time in minutes: {freeTimeInMinutes}</h4>
        </div>
      </main>
    </div>
  );
}
