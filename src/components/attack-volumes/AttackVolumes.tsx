import React from "react";
import styles from "./attack-volumes.module.css";
import AttackVolumeItem from "../attack-volume-item/AttackVolumeItem";

interface TopFiveLrlObject {
  value: number;
}

type TopFiveLrlData = TopFiveLrlObject[];

const AttackVolumes = async () => {
  let resAttackVolumesBits;
  let resAttackVolumesPackets;
  try {
    resAttackVolumesBits = await fetch(
      "https://api-ddos.tic.ir/api/top-five-lrl",
      {
        cache: "no-store",
      }
    );
  } catch (error) {
    console.log("error", error);
  }
  try {
    resAttackVolumesPackets = await fetch(
      "https://api-ddos.tic.ir/api/top-five-pps",
      {
        cache: "no-store",
      }
    );
  } catch (error) {
    console.log("error", error);
  }

  const attackVolumesBits: TopFiveLrlData | undefined =
    await resAttackVolumesBits?.json();
  const attackVolumesPackets: TopFiveLrlData | undefined =
    await resAttackVolumesPackets?.json();

  return (
    <div className={`flex-r ${styles.attackVolumes}`}>
      {attackVolumesBits?.length ? (
        <div className={`flex-c ${styles.leftContainer}`}>
          <AttackVolumeItem attackVolumes={attackVolumesBits} type="bits" />
        </div>
      ) : (
        ""
      )}

      {attackVolumesPackets?.length ? (
        <div className={`flex-c ${styles.rightContainer}`}>
          <AttackVolumeItem
            attackVolumes={attackVolumesPackets}
            type="packets"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AttackVolumes;
