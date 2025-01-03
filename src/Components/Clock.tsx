import { useEffect, useState } from "react";
import moment from "moment-timezone";

export function Clock() {
  const [timeNow, updateTime] = useState(
    moment().tz("Europe/London").format("hh:mm:ss A z")
  );
  useEffect(() => {
    const interval = setInterval(() => {
      updateTime(moment().tz("Europe/London").format("hh:mm:ss A z"));
    }, 900);

    return () => clearInterval(interval);
  }, []);
  return <div className="clock">{timeNow}</div>;
}
