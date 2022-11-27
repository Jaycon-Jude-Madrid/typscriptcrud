import React from "react";

import { ITask } from "../intefaces";

interface props {
  task: ITask;
  deleteTask: (taskname: number) => void;
}

const TodoTask = ({ task, deleteTask }: props) => {
  console.log(task.taskName);
  return (
    <div>
      <h1>{task.taskName}</h1>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TodoTask;
