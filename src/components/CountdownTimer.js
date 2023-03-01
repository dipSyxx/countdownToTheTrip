import styles from "./styles.module.sass";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { End } from "./End";

function CountdownTimer() {
  const [expiryTime, setExpiryTime] = useState("14 mar 2023 22:00:00");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownlMinutes: "",
    countdownSeconds: "",
  });

  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });

  return (
    <>
      {expiryTime !== false ? (
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <div className={styles.title}>
              COUNTDOWN TO THE TRIP<span className={styles.one}>.</span>
              <span className={styles.two}>.</span>
              <span className={styles.three}>.</span>
            </div>
            <div className={styles.clock_block}>
              <>
                <div className={styles.sector}>
                  <button
                    type="button"
                    className={clsx(styles.btn, styles.button)}
                  >
                    {countdownTime.countdownDays}{" "}
                  </button>
                  <>
                    <div className={clsx(styles.subs)}>Days</div>
                  </>
                </div>
                <button
                  type="button"
                  className={clsx(styles.btn, styles.button_success)}
                >
                  :
                </button>
                <div className={styles.sector}>
                  <button
                    type="button"
                    className={clsx(styles.btn, styles.button)}
                  >
                    {countdownTime.countdownHours}{" "}
                  </button>
                  <>
                    <div className={styles.subs}>Hours</div>
                  </>
                </div>
                <button
                  type="button"
                  className={clsx(styles.btn, styles.button_success)}
                >
                  :
                </button>
                <div className={styles.sector}>
                  <button
                    type="button"
                    className={clsx(styles.btn, styles.button)}
                  >
                    {countdownTime.countdownMinutes}{" "}
                  </button>
                  <>
                    <div className={styles.subs}>Minutes</div>
                  </>
                </div>
                <button
                  type="button"
                  className={clsx(styles.btn, styles.button_success)}
                >
                  :
                </button>
                <div className={styles.sector}>
                  <button
                    type="button"
                    className={clsx(styles.btn, styles.button)}
                  >
                    {countdownTime.countdownSeconds}{" "}
                  </button>
                  <>
                    <div className={styles.subs}>Seconds</div>
                  </>
                </div>
              </>
            </div>
          </div>
        </div>
      ) : (
        <End />
      )}
    </>
  );
}
export default CountdownTimer;
