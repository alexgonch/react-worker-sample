import logo from "./logo.svg";
import "./App.css";

import worker from "workerize-loader?inline!./worker/processWorker"; //eslint-disable-line

function App() {
  let inst = worker();

  const currentUwi = "100030902603W500";
  const color = "#F00";

  inst.processWorker(currentUwi, color).then((res) => {
    console.log("Received response from worker", res);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
