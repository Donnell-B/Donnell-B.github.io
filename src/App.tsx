import moment from "moment-timezone";
import "./App.css";
import { useEffect, useState } from "react";
import { email, GitHub } from "./Socials/Socials";

const socialLinks = [GitHub, email];

function App() {
  const [timeNow, updateTime] = useState(
    moment().tz("Europe/London").format("hh:mm:ss A z")
  );
  useEffect(() => {
    const interval = setInterval(() => {
      updateTime(moment().tz("Europe/London").format("hh:mm:ss A z"));
    }, 900);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="clock">{timeNow}</div>
      <div className="card rounded-lg">
        <div>
          <span className="name">DonnellB</span>
          <span className="domain">.dev</span>
        </div>
        <div className="message">I'm still working on some things...</div>
        <div className="connections">
          {socialLinks.map((connection, index) => (
            <a key={index} href={connection.link}>
              <div className={"connectionIcon"}>
                <div>{connection.icon}</div>

                {connection.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
