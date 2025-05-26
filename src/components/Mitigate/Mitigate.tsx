import React from "react";
import styles from "./mitigate.module.css";
import RaiseSVG from "../svgs/raise/Raise";
import MitigateItem from "../mitigate-item/MitigateItem";

interface CountData {
  count: number;
}
interface DroppedPacketsData {
  count: number;
  sum: number;
}

const Mitigate = async () => {
  let resMitigatedAttacksCount = null;
  let resDroppedPacketsCount = null;
  let resDroppedBytesCount = null;
  try {
    resMitigatedAttacksCount = await fetch(
      "https://api-ddos.tic.ir/api/count-chart",
      {
        cache: "no-store",
      }
    );
  } catch (error) {
    console.log("error", error);
  }

  try {
    resDroppedPacketsCount = await fetch(
      "https://api-ddos.tic.ir/api/sum-pps",
      {
        cache: "no-store",
      }
    );
  } catch (error) {
    console.log("error", error);
  }
  try {
    resDroppedBytesCount = await fetch("https://api-ddos.tic.ir/api/sum-lrl", {
      cache: "no-store",
    });
  } catch (error) {
    console.log("error", error);
  }

  const mitigatedAttacksCount: CountData =
    await resMitigatedAttacksCount?.json();

  const droppedPacketsCount: DroppedPacketsData =
    await resDroppedPacketsCount?.json();
  const droppedBytesCount: DroppedPacketsData =
    await resDroppedBytesCount?.json();

  return (
    <div className={`flex-r ${styles.mitigate}`}>
      <div className={`flex-c ${styles.leftContainer}`}>
        <RaiseSVG color="white" height={68} width={68} />
        <p className={styles.mitigatedAttacksCount}>
          {mitigatedAttacksCount ? mitigatedAttacksCount.count : 0}
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
          <MitigateItem type="packets" count={droppedPacketsCount.sum} />
          <MitigateItem type="bytes" count={droppedBytesCount.sum} />
        </div>
      </div>
    </div>
  );
};

export default Mitigate;
