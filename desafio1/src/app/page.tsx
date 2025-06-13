"use client";
import { getMinutesByHours } from "@/lib/timeHelper";
import { WeeklyScheduleForm } from "./components/WeeklyScheduleForm";
import styles from "./page.module.css";
import type { FormValues } from "./types/formType";
import { useState } from "react";
import useSaveToLocalStorage from "./hooks/useSaveToLocalStorage";
import useGetFromLocalStorage from "./hooks/useGetFromLocalStorage";
import { FREE_TIME_LOCAL_STORAGE_KEY } from "./constants/localStorageKeys";
import { SearchForm } from "./components/SearchForm";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

// TODO: Add two more pages to separate the logic

export default function Home() {
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
    <div className={styles.page}>
      <QueryClientProvider client={queryClient}>
        <main className={styles.main}>
          <div className={styles.ctas}>
            <h3 style={{ textDecoration: "underline", marginBottom: "3rem" }}>Week:</h3>
            <WeeklyScheduleForm
              onSubmit={onSubmit}
              initialData={getInitialValues(FREE_TIME_LOCAL_STORAGE_KEY) ?? null}
            />
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
        </main>
      </QueryClientProvider>
    </div>
  );
}
