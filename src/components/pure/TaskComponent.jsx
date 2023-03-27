import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

export const TaskComponent = ({task}) => {
    const {name, description, completed, level} = task;
   
  return (
    <div>
        <h3>Name: {name}</h3>
        <label>Description: {description}</label>
        <label>Level: {level}</label>
        <label>This Task is: {completed?"COMPLETED":"PENDING"}</label>
        
        
    </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}