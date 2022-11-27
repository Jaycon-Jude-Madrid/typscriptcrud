import { ChangeEvent, FC, FormEvent, SyntheticEvent, useState } from "react";
import HttpExample from "./components/HttpExample";
import TodoTask from "./components/TodoTask";
import { ITask } from "./intefaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const id = Math.floor(Math.random() * 90 + 10);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline, id: id };
    if (!task || deadline === 0) {
      alert("Please input ");
    } else {
      setTodoList((prev) => [...prev, newTask]);
    }

    setTask("");
    setDeadline(0);
  };
  const deleteTask = (taskNameDelete: number) => {
    setTodoList(
      todoList.filter((task) => {
        return task.id != taskNameDelete;
      })
    );
  };

  console.log(todoList);
  return (
    <div className="App">
      <div className="Header">
        <div className="inputContanier">
          <input
            name="task"
            type="text"
            placeholder="Task..."
            onChange={handleChange}
            value={task}
          />
          <input
            name="deadline"
            type="number"
            placeholder="Deadline (in Days)..."
            onChange={handleChange}
            value={deadline}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} deleteTask={deleteTask} />;
        })}
      </div>
      <HttpExample />
    </div>
  );
};

export default App;
