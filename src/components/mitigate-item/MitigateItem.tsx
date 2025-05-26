import React from "react";
import styles from "./mitigate-item.module.css";
import formatCount from "@/utils/format-count";

interface MitigateItemProps {
  type: "bytes" | "packets";
  count: number;
}

const MitigateItem: React.FC<MitigateItemProps> = (props) => {
  const { count, type } = props;

  const [formatted, measurement] = formatCount(count, type);

  return (
    <div className={`flex-c ${styles.container}`}>
      <p className={styles.title}>{measurement}</p>
      <p className={styles.number}>{formatted}</p>
      <p className={styles.desc}>
        Total Number of&nbsp;
        <span className={styles.underline}>
          Dropped&nbsp;
          {type === "bytes" ? "Bytes" : "Packets"}
        </span>
      </p>
    </div>
  );
};

export default MitigateItem;
