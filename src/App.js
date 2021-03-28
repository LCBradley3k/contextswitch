import TasksContainer from "./TasksContainer.js"
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="App__Header">
        <h1>Context <span>Switch</span></h1>
        <h2>The middleware for your life.</h2>
      </div>
      <TasksContainer />
    </div>
  );
}

export default App;
