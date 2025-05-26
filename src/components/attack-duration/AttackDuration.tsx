import React from "react";
import styles from "./attack-duration.module.css";
import DurationClockSVG from "../svgs/duration-clock/DurationClock";

const AttackDuration = () => {
  return (
    <div className={`flex-r ${styles.attackDuration}`}>
      <div className={styles.durationSVGContainer}>
        <DurationClockSVG color="foreground" width={200} height={104} />
        <div className={styles.grayBack} />
      </div>
    </div>
  );
};

export default AttackDuration;
