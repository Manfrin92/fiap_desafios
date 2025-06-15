"use client";
import { useState } from "react";
import { SearchForm } from "../components/SearchForm";
import { WeeklyScheduleForm } from "../components/WeeklyScheduleForm";
import type { FormValues } from "../types/formType";
import useGetFromLocalStorage from "../hooks/useGetFromLocalStorage";
import useSaveToLocalStorage from "../hooks/useSaveToLocalStorage";
import { getMinutesByHours } from "@/lib/timeHelper";
import { FREE_TIME_LOCAL_STORAGE_KEY } from "../constants/localStorageKeys";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="flex justify-center">
      <Card className="bg-neutral-800 w-lg max-w-svh text-white mt-8">
        <CardHeader>
          <CardTitle>Week:</CardTitle>
          <CardDescription>
            Enter your available time per week day, currently you have {freeTimeInMinutes ?? 0} minutes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <WeeklyScheduleForm onSubmit={onSubmit} initialData={getInitialValues(FREE_TIME_LOCAL_STORAGE_KEY) ?? null} />
          <div>
            <CardTitle>Search videos:</CardTitle>
            <CardDescription>Select the videos you'd like to watch during your week</CardDescription>
            <SearchForm
              onSubmit={(values) => {
                console.log(values);
              }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
