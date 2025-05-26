"use client";

import { useState } from "react";
import styles from "./flow-chart.module.css";

const FlowChart = () => {
  const [trailPosition, setTrailPosition] = useState(0);

  return (
    <div className={`flex-c ${styles.flowChart}`}>
      <div className={`flex-r ${styles.titleRow}`}>
        <p className={styles.title}>Traffic Flow Chart</p>
        <div className={`flex-r ${styles.titleRight}`}>
          <div className={`flex-r ${styles.timeSelector}`}>
            <p className={styles.time} onClick={() => setTrailPosition(0)}>
              1 day
            </p>
            <p className={styles.time} onClick={() => setTrailPosition(70)}>
              1 week
            </p>
            <p className={styles.time} onClick={() => setTrailPosition(144)}>
              1 hour
            </p>
            <div
              className={styles.timeTrail}
              style={{ left: `${trailPosition}px` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowChart;
