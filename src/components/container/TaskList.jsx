import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import { TaskComponent } from '../pure/TaskComponent';



export const TaskList = ({taskList=[1,2,3]}) => {
const defaultTask = new Task("Default Task","Default Task Description",false, LEVELS.NORMAL );
    return (
    <div>
        {taskList.map((task=>(
            <TaskComponent key={task} task={defaultTask}/>
        )))}
    </div>
  )
}


