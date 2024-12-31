import "./App.css";

const connections = ["Github", "E-mail", ""];

interface conn {
  name: string;
  link: string;
  icon: string;
}

function App() {
  return (
    <>
      <div>Hello? Is this thing on?</div>
      <div className="card rounded-lg">
        <div className="name">Donnell</div>
        <div className="connections">
          {connections.map((connections, index) => (
            <span key={index}>{connections}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
