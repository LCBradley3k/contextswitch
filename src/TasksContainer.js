import React, {Component} from 'react';
import Task from './Task';
import "./TasksContainer.css";
import soundfile from "./assets/work-lunch.mp3";

class TasksContainer extends Component {

    render(){
        return(
            <div className="TasksContainer">
                <Task name="work"/>
                <Task name="lunch"/>
                <div className="App__AudioPlayer">
                    <audio src={soundfile} controls>
                    </audio>
                </div>
            </div>
        )
    }
}

export default TasksContainer;