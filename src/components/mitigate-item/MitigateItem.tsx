import React from "react";
import styles from "./mitigate-item.module.css";

interface MitigateItemProps {
  type: "bytes" | "packets";
  count: number;
}

function formatCount(
  count: number,
  type: "bytes" | "packets"
): [string, string] {
  if (type === "bytes") {
    const Kilo = 1024;
    const Mega = Kilo ** 2;
    const Giga = Kilo ** 3;
    const Tera = Kilo ** 4;
    const Peta = Kilo ** 5;

    if (count >= Peta) {
      return [(count / Peta).toFixed(2), "Peta Bytes"];
    } else if (count >= Tera) {
      return [(count / Tera).toFixed(2), "Tera Bytes"];
    } else if (count >= Giga) {
      return [(count / Giga).toFixed(2), "Giga Bytes"];
    } else if (count >= Mega) {
      return [(count / Mega).toFixed(2), "Mega Bytes"];
    } else if (count >= Kilo) {
      return [(count / Kilo).toFixed(2), "Kilo Bytes"];
    }
    return [count.toFixed(2), "Bytes"];
  } else {
    const KiloPackets = 1000;
    const MillionPackets = KiloPackets * 1000;
    const BillionPackets = MillionPackets * 1000;

    if (count >= BillionPackets) {
      return [(count / BillionPackets).toFixed(2), "Billion Packets"];
    } else if (count >= MillionPackets) {
      return [(count / MillionPackets).toFixed(2), "Million Packets"];
    } else if (count >= KiloPackets) {
      return [(count / KiloPackets).toFixed(2), "Thousand Packets"];
    } else if (count >= 100) {
      return [(count / 100).toFixed(2), "Hundred Packets"];
    }
    return [count.toFixed(2), "Packets"];
  }
}

const MitigateItem: React.FC<MitigateItemProps> = (props) => {
  const { count, type } = props;

  const [formatted, measurement] = formatCount(count, type);

  return (
    <div
      className={`flex-c ${styles.container}`}
      style={type === "bytes" ? { borderLeft: "none" } : {}}
    >
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
