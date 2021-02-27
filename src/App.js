import Task from "./Task.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App__TaskContainer">
        <Task name="work"/>
        <Task name="lunch"/>
      </div>
    </div>
  );
}

export default App;
