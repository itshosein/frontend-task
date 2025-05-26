import React from "react";
import RocketSVG from "../svgs/rocket/Rocket";
import TargetSVG from "../svgs/target/Target";
import styles from "./attack-volume-item.module.css";
import formatVolume from "@/utils/format-volume";

interface AttackVolumeItemProps {
  attackVolumes: { value: number }[];
  type: "bits" | "packets";
}

const AttackVolumeItem: React.FC<AttackVolumeItemProps> = (props) => {
  const { attackVolumes, type } = props;
  return (
    <>
      <div className={`flex-r ${styles.topContainer}`}>
        {type === "bits" ? (
          <RocketSVG color="green" height={50} width={50} />
        ) : (
          <TargetSVG color="green" height={50} width={50} />
        )}
        <div className={`flex-c ${styles.topColumn}`}>
          <p className={styles.topTitle}>Maximum Attack Volumes</p>
          <p className={styles.topDesc}>{type}</p>
        </div>
      </div>
      <div className={`flex-r ${styles.countContainer}`}>
        <p className={styles.count}>
          {formatVolume(attackVolumes[0].value, type)[0]}
        </p>
        <p className={styles.measurement}>
          {formatVolume(attackVolumes[0].value, type)[1]}
        </p>
      </div>
      <p className={styles.desc}>
        Maximum Volume Of The
        <span className={styles.underlineLink}>Mitigated</span> Attacks
      </p>
      {attackVolumes?.length > 1 ? (
        <div className={`flex-r ${styles.listContainer}`}>
          {attackVolumes.map((element, index) => {
            return (
              <div
                className={`flex-r ${styles.listItem}`}
                key={index.toString().length + index}
              >
                <p className={styles.countItem}>
                  {formatVolume(element.value, type)[0]}&nbsp;
                  {formatVolume(element.value, type)[1]}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AttackVolumeItem;
