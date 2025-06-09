'use client'
import { WeeklyScheduleForm } from "./components/WeeklyScheduleForm";
import styles from "./page.module.css";
import { FormValues } from "./types/formType";

export default function Home() {
  function onSubmit(values: FormValues) {
    console.log(values)
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <h3 style={{textDecoration: "underline", marginBottom: "3rem"}}>Week:</h3>
          <WeeklyScheduleForm onSubmit={onSubmit}/>
        </div>
      </main>
    </div>
  );
}
