import Task from "./Task.js"
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
    </div>
  );
}

export default App;
