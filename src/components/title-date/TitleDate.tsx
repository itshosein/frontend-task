import styles from "./title-date.module.css";
import CalendarSVG from "../svgs/calendar/Calendar";
import ClockSVG from "../svgs/clock/Clock";

const TitleDate = () => {
  const convertToPersianDate = (date: Date) => {
    const persianDate = new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
    const englishDate = persianDate.replace(/[۰-۹]/g, (digit) =>
      String(digit.charCodeAt(0) - 1776)
    );

    return englishDate.replace(/\//g, "/");
  };
  const getCurrentTime = (date: Date): string => {
    const hours: string = String(date.getHours()).padStart(2, "0");
    const minutes: string = String(date.getMinutes()).padStart(2, "0");
    const seconds: string = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: "long" };

  const dayOfWeek = new Intl.DateTimeFormat("en-US", options).format(
    currentDate
  );

  const persianDate = convertToPersianDate(currentDate);

  const time: string = getCurrentTime(currentDate);

  return (
    <div>
      <div className={`flex-r ${styles.topContainer} `}>
        <p className={styles.title}>TIC DDoS Radar</p>
        <div className={`flex-r ${styles.dateTimeBox}`}>
          <div className={`flex-r ${styles.dateBox}`}>
            <CalendarSVG height={24} width={24} color="list-gray" />
            <p className={styles.date}>
              {dayOfWeek} - {persianDate}
            </p>
          </div>

          <div className={`flex-r ${styles.dateBox}`}>
            <ClockSVG height={24} width={24} color="list-gray" />
            <p className={styles.date}>{time}</p>
          </div>
        </div>
      </div>
      <p className={styles.description}>
        The Radar report has been extracted from the data of the
        <span className={styles.companyName}>SIWAN</span> DDoS detection and
        Mitigation system, which has been deployed and operated by the TIC
        company as the country&apos;s defense shield, providing effective
        protection against attacks.
      </p>
    </div>
  );
};

export default TitleDate;
