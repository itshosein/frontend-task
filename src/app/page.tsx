import Mitigate from "@/components/mitigate/Mitigate";
import TitleDate from "@/components/title-date/TitleDate";
import styles from "./page.module.css";
import AttackVolumes from "@/components/attack-volumes/AttackVolumes";

export default function Home() {
  return (
    <div className={`flex-c ${styles.home}`}>
      <TitleDate />
      <div className={`flex-r ${styles.firstRow}`}>
        <Mitigate />
        <AttackVolumes />
      </div>
    </div>
  );
}
