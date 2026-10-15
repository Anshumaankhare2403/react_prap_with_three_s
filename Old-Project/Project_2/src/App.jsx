import { useState } from "react";

function App() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  const [overs, setOvers] = useState(0);
  const [balls, setBalls] = useState(0);

  const [fours, setFours] = useState(0);
  const [sixes, setSixes] = useState(0);

  const [status, setStatus] = useState("Match Running");

  const [currentOver, setCurrentOver] = useState([]);
  const [overHistory, setOverHistory] = useState([]);

  function recordBall(value, totalRuns, totalWickets) {
    const over = [...currentOver, value];

    if (over.length === 6) {
      const overRuns = over.reduce(
        (sum, ball) => sum + (ball === "W" ? 0 : Number(ball)),
        0
      );

      const overWickets = over.filter((ball) => ball === "W").length;

      setOverHistory((prev) => [
        ...prev,
        {
          balls: over,
          runs: overRuns,
          wickets: overWickets,
          totalRuns,
          totalWickets,
        },
      ]);

      setCurrentOver([]);
    } else {
      setCurrentOver(over);
    }
  }

  function nextBall() {
    if (balls === 5) {
      const nextOver = overs + 1;

      setOvers(nextOver);
      setBalls(0);

      if (nextOver === 20) {
        setStatus("Match Over");
      }
    } else {
      setBalls((prev) => prev + 1);
    }
  }

  function addRuns(run) {
    if (status === "Match Over") return;

    const newRuns = runs + run;

    setRuns(newRuns);

    if (run === 4) setFours((prev) => prev + 1);
    if (run === 6) setSixes((prev) => prev + 1);

    recordBall(run, newRuns, wickets);

    nextBall();
  }

  function dotBall() {
    if (status === "Match Over") return;

    recordBall(0, runs, wickets);

    nextBall();
  }

  function addWicket() {
    if (status === "Match Over") return;

    const newWickets = wickets + 1;

    setWickets(newWickets);

    recordBall("W", runs, newWickets);

    nextBall();

    if (newWickets === 10) {
      setStatus("Match Over");
    }
  }

  return (
     <div className="container">

    <div className="scoreboard">

      <h1>🏏 Cricket Scoreboard</h1>

      <h2 className="status">{status}</h2>

      <div className="score-grid">

        <div className="card">
          <h2>{runs}/{wickets}</h2>
          <p>Score</p>
        </div>

        <div className="card">
          <h2>{overs}.{balls}</h2>
          <p>Overs</p>
        </div>

        <div className="card">
          <h2>{fours}</h2>
          <p>Fours</p>
        </div>

        <div className="card">
          <h2>{sixes}</h2>
          <p>Sixes</p>
        </div>

      </div>

      <div className="buttons">

        <button onClick={() => addRuns(1)} disabled={status === "Match Over"}>1</button>

        <button onClick={() => addRuns(2)} disabled={status === "Match Over"}>2</button>

        <button onClick={() => addRuns(3)} disabled={status === "Match Over"}>3</button>

        <button onClick={() => addRuns(4)} disabled={status === "Match Over"}>4</button>

        <button onClick={() => addRuns(6)} disabled={status === "Match Over"}>6</button>

        <button onClick={dotBall} disabled={status === "Match Over"}>
          Dot
        </button>

        <button onClick={addWicket} disabled={status === "Match Over"}>
          W
        </button>

      </div>

    </div>

    <div className="over-box">

      <h2>Current Over</h2>

      <div className="current-over">
        {currentOver.length === 0 ? "-" : currentOver.join(" ")}
      </div>

      <h2>Overs Summary</h2>

      <div className="history">

        {overHistory.map((over, index) => (
          <div key={index}>
            <strong>Over {index + 1}</strong> : {over.balls.join(" ")}
            <span> = {over.runs}/{over.wickets}</span>
          </div>
        ))}

      </div>

    </div>

  </div>
  );
}

export default App;