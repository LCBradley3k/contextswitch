import React, {Component} from 'react';
import "./Task.css"
import soundfile from "./assets/work-lunch.mp3";

class Task extends Component {
    render() {
        return(
            <div className="Task">
                <p className="Task__Name">{this.props.name}</p>
            </div>
        )
    }
}

export default Task;