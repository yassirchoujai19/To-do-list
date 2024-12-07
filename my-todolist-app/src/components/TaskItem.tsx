import React from 'react';
import { Task } from '../interfaces/Task';

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask, deleteTask }) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        style={{ marginRight: '8px' }}
      />
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          flex: 1,
          color: task.completed ? 'gray' : 'black',
        }}
      >
        {task.text}
      </span>
      {task.completed && (
        <span style={{ marginLeft: '10px', color: 'green' }}>Completed</span>
      )}
      <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
