import "./App.css";
import { SocialLinkCard } from "./Components/SocialLinkCard";
import { Clock } from "./Components/Clock";
import { Email, Projects, GitHub } from "./Components/SocialLinks";

const SocialLinks = [GitHub, Email, Projects];

function App() {
  return (
    <>
      <Clock />

      <div className="card rounded-lg">
        <div>
          <span className="name">DonnellB</span>
          <span className="domain">.dev</span>
        </div>
        <div className="message">I'm still working on some things...</div>
        <div className="connections">
          {SocialLinks.map((connection, index) => (
            <SocialLinkCard {...connection} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
