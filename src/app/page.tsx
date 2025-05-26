import Mitigate from "@/components/mitigate/Mitigate";
import TitleDate from "@/components/title-date/TitleDate";
import styles from "./page.module.css";
import AttackVolumes from "@/components/attack-volumes/AttackVolumes";
import FlowChart from "@/components/flow-chart/FlowChart";
import AttackDuration from "@/components/attack-duration/AttackDuration";

export default function Home() {
  return (
    <div className={`flex-c ${styles.home}`}>
      <TitleDate />
      <div className={`flex-r ${styles.firstRow}`}>
        <Mitigate />
        <AttackVolumes />
      </div>
      <div className={`flex-r ${styles.secondRow}`}>
        <FlowChart />
        <AttackDuration />
      </div>
    </div>
  );
}
