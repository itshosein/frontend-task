import React from "react";
import styles from "./mitigate.module.css";
import RaiseSVG from "../svgs/Raise/Raise";

interface CountData {
  count: number;
}

const Mitigate = async () => {
  const res = await fetch("https://api-ddos.tic.ir/api/count-chart", {
    cache: "no-store",
  });
  const mitigatedAttacksCount: CountData = await res.json();

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
    </div>
  );
};

export default Mitigate;
