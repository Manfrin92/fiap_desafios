import React from "react";
import type { FormValues } from "../types/formType";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { UseFormRegister } from "react-hook-form";

type WeeklyScheduleFormProps = {
  onSubmit(value: FormValues): void;
  register: UseFormRegister<FormValues>;
};

export function WeeklyScheduleForm({ onSubmit, register }: WeeklyScheduleFormProps) {
  return (
    <form
      className="flex flex-col gap-6 mt-4"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        onSubmit(data as FormValues);
      }}
    >
      <div className="flex gap-4 min-w-18 items-center justify-between">
        <span>Monday</span>
        <div className="flex gap-2">
          <div>
            <label htmlFor="Monday-hours" className="hidden">
              Monday Hours
            </label>
            <Input
              id="Monday-hours"
              type="number"
              placeholder="Hours"
              min="0"
              max="24"
              className="min-w-26"
              {...register("Monday-hours", { required: true, min: 0, max: 24 })}
            />
          </div>
          <div>
            <label htmlFor="Monday-minutes" className="hidden">
              Monday Minutes
            </label>
            <Input
              id="Monday-minutes"
              type="number"
              placeholder="Minutes"
              min="0"
              max="59"
              className="min-w-26"
              {...register("Monday-minutes", { required: true, min: 0, max: 59 })}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 min-w-18 items-center justify-between">
        <span>Tuesday</span>
        <div className="flex gap-2">
          <div>
            <label htmlFor="Tuesday-hours" className="hidden">
              Tuesday Hours
            </label>
            <Input
              id="Tuesday-hours"
              type="number"
              placeholder="Hours"
              min="0"
              max="24"
              className="min-w-26"
              {...register("Tuesday-hours", { required: true, min: 0, max: 24 })}
            />
          </div>
          <div>
            <label htmlFor="Tuesday-minutes" className="hidden">
              Tuesday Minutes
            </label>
            <Input
              id="Tuesday-minutes"
              type="number"
              placeholder="Minutes"
              min="0"
              max="59"
              className="min-w-26"
              {...register("Tuesday-minutes", { required: true, min: 0, max: 59 })}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 min-w-18 items-center justify-between">
        <span>Wednesday</span>
        <div className="flex gap-2">
          <div>
            <label htmlFor="Wednesday-hours" className="hidden">
              Wednesday Hours
            </label>
            <Input
              id="Wednesday-hours"
              type="number"
              placeholder="Hours"
              min="0"
              max="24"
              className="min-w-26"
              {...register("Wednesday-hours", { required: true, min: 0, max: 24 })}
            />
          </div>
          <div>
            <label htmlFor="Wednesday-minutes" className="hidden">
              Wednesday Minutes
            </label>
            <Input
              id="Wednesday-minutes"
              type="number"
              placeholder="Minutes"
              min="0"
              max="59"
              className="min-w-26"
              {...register("Wednesday-minutes", { required: true, min: 0, max: 59 })}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 min-w-18 items-center justify-between">
        <span>Thursday</span>
        <div className="flex gap-2">
          <div>
            <label htmlFor="Thursday-hours" className="hidden">
              Thursday Hours
            </label>
            <Input
              id="Thursday-hours"
              type="number"
              placeholder="Hours"
              min="0"
              max="24"
              className="min-w-26"
              {...register("Thursday-hours", { required: true, min: 0, max: 24 })}
            />
          </div>
          <div>
            <label htmlFor="Thursday-minutes" className="hidden">
              Thursday Minutes
            </label>
            <Input
              id="Thursday-minutes"
              type="number"
              placeholder="Minutes"
              min="0"
              max="59"
              className="min-w-26"
              {...register("Thursday-minutes", { required: true, min: 0, max: 59 })}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 min-w-18 items-center justify-between">
        <span>Friday</span>
        <div className="flex gap-2">
          <div>
            <label htmlFor="Friday-hours" className="hidden">
              Friday Hours
            </label>
            <Input
              id="Friday-hours"
              type="number"
              placeholder="Hours"
              min="0"
              max="24"
              className="min-w-26"
              {...register("Friday-hours", { required: true, min: 0, max: 24 })}
            />
          </div>
          <div>
            <label htmlFor="Friday-minutes" className="hidden">
              Friday Minutes
            </label>
            <Input
              id="Friday-minutes"
              type="number"
              placeholder="Minutes"
              min="0"
              max="59"
              className="min-w-26"
              {...register("Friday-minutes", { required: true, min: 0, max: 59 })}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 min-w-18 items-center justify-between">
        <span>Saturday</span>
        <div className="flex gap-2">
          <div>
            <label htmlFor="Saturday-hours" className="hidden">
              Saturday Hours
            </label>
            <Input
              id="Saturday-hours"
              type="number"
              placeholder="Hours"
              min="0"
              max="24"
              className="min-w-26"
              {...register("Saturday-hours", { required: true, min: 0, max: 24 })}
            />
          </div>
          <div>
            <label htmlFor="Saturday-minutes" className="hidden">
              Saturday Minutes
            </label>
            <Input
              id="Saturday-minutes"
              type="number"
              placeholder="Minutes"
              min="0"
              max="59"
              className="min-w-26"
              {...register("Saturday-minutes", { required: true, min: 0, max: 59 })}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 min-w-18 items-center justify-between">
        <span>Sunday</span>
        <div className="flex gap-2">
          <div>
            <label htmlFor="Sunday-hours" className="hidden">
              Sunday Hours
            </label>
            <Input
              id="Sunday-hours"
              type="number"
              placeholder="Hours"
              min="0"
              max="24"
              className="min-w-26"
              {...register("Sunday-hours", { required: true, min: 0, max: 24 })}
            />
          </div>
          <div>
            <label htmlFor="Sunday-minutes" className="hidden">
              Sunday Minutes
            </label>
            <Input
              id="Sunday-minutes"
              type="number"
              placeholder="Minutes"
              min="0"
              max="59"
              className="min-w-26"
              {...register("Sunday-minutes", { required: true, min: 0, max: 59 })}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:flex-row justify-end">
        <Button type="submit" className="cursor-pointer" variant="secondary">
          Update
        </Button>
      </div>
    </form>
  );
}
