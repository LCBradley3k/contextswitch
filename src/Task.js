import React, {Component} from 'react';
import "./Task.css"

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