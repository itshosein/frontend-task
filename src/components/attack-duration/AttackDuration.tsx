import React from "react";
import styles from "./attack-duration.module.css";
import DurationClockSVG from "../svgs/duration-clock/DurationClock";
import convertMilliseconds from "@/utils/convert-milliseconds";

interface DurationData {
  duration: number;
}

const AttackDuration = async () => {
  let resDuration;
  try {
    resDuration = await fetch("https://api-ddos.tic.ir/api/duration", {
      cache: "no-store",
    });
  } catch (error) {
    console.log("error", error);
  }

  const duration: DurationData = await resDuration?.json();

  const durationObj = convertMilliseconds(duration.duration);

  return (
    <div className={`flex-r ${styles.attackDuration}`}>
      <DurationClockSVG color="foreground" width={200} height={104} />

      <div className={`flex-r ${styles.timersHolder}`}>
        <div className={`flex-c ${styles.timeItem}`}>
          <div className={`flex-c ${styles.timerContainer}`}>
            <p className={styles.time}>{durationObj.days}</p>
          </div>
          <p className={styles.timerDesc}>DAYS</p>
        </div>
        <div className={`flex-c ${styles.timeItem}`}>
          <div className={`flex-c ${styles.timerContainer}`}>
            <p className={styles.time}>{durationObj.hours}</p>
          </div>
          <p className={styles.timerDesc}>HOURS</p>
        </div>
        <div className={`flex-c ${styles.timeItem}`}>
          <div className={`flex-c ${styles.timerContainer}`}>
            <p className={styles.time}>{durationObj.minutes}</p>
          </div>
          <p className={styles.timerDesc}>MINUTES</p>
        </div>
      </div>

      <div className={`flex-c ${styles.descHolder}`}>
        <p className={styles.topDesc}>Maximum</p>
        <p className={styles.bottomDesc}>Attack Duration</p>
      </div>
    </div>
  );
};

export default AttackDuration;
