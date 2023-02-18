import React, {useState} from 'react';
import ToDoItem from '../to-do-item/to-do-item';

const ToDoList = () => {
  const [tasks, setTasks] = useState(Array(5).fill(""));
  const [inputs, setInputs] = useState(Array(5).fill(true));

  const handleChange = (index, event) => {
    const newTasks = [...tasks];
    newTasks[index] = event.target.value;
    setTasks(newTasks);
  };

  const handleBlur = (index) => {
    if( tasks[index] !== "" ) {
    const newInputs = [...inputs];
    newInputs[index] = false;
    setInputs(newInputs);
    setEditIndex(-1);
  }};

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = "";
    setTasks(newTasks);

    const newInputs = [...inputs];
    newInputs[index] = true;
    setInputs(newInputs);
  };

  const [editIndex, setEditIndex] = useState(-1);
  const handleEdit = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="to-do-list">
      <h4 className="title">AFAZERES</h4>
      {tasks.map((task, index) =>
        inputs[index] || editIndex === index ? (
          <input
            key={index}
            className="to-do-input"
            value={task}
            onChange={(event) => handleChange(index, event)}
            onBlur={() => handleBlur(index)}
          />
        ) : (
          <ToDoItem
            key={index}
            text={task}
            deleteTask={() => deleteTask(index)}
            editTask={() => handleEdit(index)}
          />
        )
      )}
    </div>
  );
};

export default ToDoList;
