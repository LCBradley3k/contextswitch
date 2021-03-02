import Task from "./Task.js"
import soundfile from "./assets/work-lunch.mp3";
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="App__Header">
        <h1>Context <span>Switch</span></h1>
        <h2>The middleware for your life.</h2>
      </div>
      <div className="App__TaskContainer">
        <Task name="work"/>
        <Task name="lunch"/>
      </div>
      <div className="App__AudioPlayer">
        <audio src={soundfile} controls>
        </audio>
      </div>
    </div>
  );
}

export default App;
