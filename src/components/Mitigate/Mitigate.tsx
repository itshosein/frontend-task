import React from "react";
import styles from "./mitigate.module.css";
import RaiseSVG from "../svgs/Raise/Raise";

interface CountData {
  count: number;
}
interface DroppedPacketsData {
  count: number;
  sum: number;
}

const Mitigate = async () => {
  const resMitigatedAttacksCount = await fetch(
    "https://api-ddos.tic.ir/api/count-chart",
    {
      cache: "no-store",
    }
  );
  const resDroppedPacketsCount = await fetch(
    "https://api-ddos.tic.ir/api/sum-pps",
    {
      cache: "no-store",
    }
  );

  const resDroppedBytesCount = await fetch(
    "https://api-ddos.tic.ir/api/sum-lrl",
    {
      cache: "no-store",
    }
  );
  const mitigatedAttacksCount: CountData =
    await resMitigatedAttacksCount.json();
  const droppedPacketsCount: DroppedPacketsData =
    await resDroppedPacketsCount.json();

  const droppedBytesCount: DroppedPacketsData =
    await resDroppedBytesCount.json();

  return (
    <div className={`flex-r ${styles.mitigate}`}>
      <div className={`flex-c ${styles.leftContainer}`}>
        <RaiseSVG color="white" height={68} width={68} />
        <p className={styles.mitigatedAttacksCount}>
          {mitigatedAttacksCount.count}
        </p>
        <p className={styles.mitigatedAttacksDesc}>
          Number Of <span>Mitigated</span> Attacks
        </p>
      </div>

      <div className={`flex-c ${styles.rightContainer}`}>
        <p className={styles.rightTitle}>
          Cumulative Sum of Mitigated DDoS Attacks
        </p>
        <div className={`flex-r ${styles.rightInnerBoxContainer}`}>
          <div className={`flex-c ${styles.leftInner}`}>
            <p className={styles.rightInnerTitle}>Billion Packets</p>
            <p className={styles.rightInnerNumber}>
              {(droppedPacketsCount.sum / 1_000_000_000).toFixed(2)}
            </p>
            <p className={styles.rightInnerDesc}>
              Total Number of Dropped Packets
            </p>
          </div>
          <div className={`flex-c ${styles.rightInner}`}>
            <p className={styles.rightInnerTitle}>Peta Bytes</p>
            <p className={styles.rightInnerNumber}>
              {(droppedBytesCount.sum / 1024 ** 5).toFixed(2)}
            </p>
            <p className={styles.rightInnerDesc}>
              Total Number of Dropped Packets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mitigate;
