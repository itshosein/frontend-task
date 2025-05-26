"use client";

import { useState } from "react";
import styles from "./flow-chart.module.css";
import ArrowSVG from "../svgs/arrow/Arrow";

const FlowChart = () => {
  const [trailPosition, setTrailPosition] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedAnalysis, setSelectedAnalysis] = useState<"volume" | "packet">(
    "volume"
  );

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
          <div
            className={`flex-r ${styles.analysisDropdownContainer}`}
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <p className={styles.selectedDropdownText}>
              Analysis based on {selectedAnalysis}
            </p>
            <ArrowSVG color="gray" height={24} width={24} />
            <div
              className={`flex-c ${styles.dropdownContent}`}
              style={{
                display: showDropdown ? "flex" : "none",
              }}
            >
              <p
                className={styles.dropdownContentItem}
                onClick={() => setSelectedAnalysis("volume")}
              >
                Analysis based on volume
              </p>
              <div className={styles.separator} />
              <p
                className={styles.dropdownContentItem}
                onClick={() => setSelectedAnalysis("packet")}
              >
                Analysis based on packet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowChart;
