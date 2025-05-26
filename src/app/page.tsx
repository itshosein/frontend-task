import Mitigate from "@/components/Mitigate/Mitigate";
import TitleDate from "@/components/TitleDate/TitleDate";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={`flex-c ${styles.home}`}>
      <TitleDate />
      <div className={`flex-r ${styles.firstRow}`}>
        <Mitigate />
      </div>
    </div>
  );
}
