import React from 'react';
import PropTypes from 'prop-types';
import {Task} from '../../models/class/task.class';

// we pass the PropTypes task to the component Task Component
const TaskComponent = ({task}) => {
    return (
        <div>
            <h2>
                Nombre: {task.name}
                </h2>
            <h3>
                Descripción: {task.description}
            </h3>
            <h4>
                Level: {task.level}
            </h4>
            {/* ? = if -> 'trueCondition':'falseCondition' */}
            <h5>
                This task is: {task.completed ? 'COMPLETED':'PEDING'}
            </h5>
        </div>
    );
};

// the PropTypes task will receive an instance of task.class via Task 
TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;