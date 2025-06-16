"use client";
import { useState } from "react";
import { SearchForm } from "../../components/SearchForm";
import { WeeklyScheduleForm } from "../../components/WeeklyScheduleForm";
import type { FormValues } from "../../types/formType";
import useGetFromLocalStorage from "../../hooks/useGetFromLocalStorage";
import useSaveToLocalStorage from "../../hooks/useSaveToLocalStorage";
import { getMinutesByHours } from "@/lib/timeHelper";
import { FREE_TIME_LOCAL_STORAGE_KEY } from "../../constants/localStorageKeys";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BreadcrumbChallenges } from "../../components/BreadcrumbChallenges";
import { useForm } from "react-hook-form";

export default function Page() {
  const saveAvailableTime = useSaveToLocalStorage();
  const getInitialValues = useGetFromLocalStorage();
  const formInitialValues = getInitialValues(FREE_TIME_LOCAL_STORAGE_KEY);

  const [freeTimeInMinutes, setFreeTimeInMinutes] = useState<number | null>(null);
  const { register } = useForm<FormValues>({
    defaultValues: {
      "Monday-hours": formInitialValues ? formInitialValues["Monday-hours"] : "",
      "Monday-minutes": formInitialValues ? formInitialValues["Monday-minutes"] : "",
      "Tuesday-hours": formInitialValues ? formInitialValues["Tuesday-hours"] : "",
      "Tuesday-minutes": formInitialValues ? formInitialValues["Tuesday-minutes"] : "",
      "Wednesday-hours": formInitialValues ? formInitialValues["Wednesday-hours"] : "",
      "Wednesday-minutes": formInitialValues ? formInitialValues["Wednesday-minutes"] : "",
      "Thursday-hours": formInitialValues ? formInitialValues["Thursday-hours"] : "",
      "Thursday-minutes": formInitialValues ? formInitialValues["Thursday-minutes"] : "",
      "Friday-hours": formInitialValues ? formInitialValues["Friday-hours"] : "",
      "Friday-minutes": formInitialValues ? formInitialValues["Friday-minutes"] : "",
      "Saturday-hours": formInitialValues ? formInitialValues["Saturday-hours"] : "",
      "Saturday-minutes": formInitialValues ? formInitialValues["Saturday-minutes"] : "",
      "Sunday-hours": formInitialValues ? formInitialValues["Sunday-hours"] : "",
      "Sunday-minutes": formInitialValues ? formInitialValues["Sunday-minutes"] : "",
    },
  });

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
    <div className="flex flex-col items-center pb-16">
      <div className="mt-3">
        <BreadcrumbChallenges currentPage="1" />
      </div>
      <Card className="bg-neutral-800 lg:w-lg max-w-svh text-white mt-8 border-neutral-600">
        <CardHeader>
          <CardTitle>Week</CardTitle>
          <CardDescription>
            Enter your available time per week day,{" "}
            <span className="font-bold underline">currently you have {freeTimeInMinutes ?? 0} minutes</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <WeeklyScheduleForm register={register} onSubmit={onSubmit} />
          <CardTitle>Search videos</CardTitle>
          <CardDescription className="mt-1">Select the videos you'd like to watch during your week</CardDescription>
          <SearchForm
            onSubmit={(values) => {
              console.log("submiting search");
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
