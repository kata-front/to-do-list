import { useState, type FC } from "react";
import { useSelector } from "react-redux";
import tasksSlice from "./tasks.slice..ts";
import type { Task } from "../../utils/types.ts";
import { useAppDispatch } from "../../utils/store.ts";
import { createTaskThunk } from "../../utils/createTaskThunk.ts";
import TaskList from "../TaskList/TaskList.tsx";

const App: FC = () => {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>("");

  const handler = () => {
    if (title) {
      const newTask: Task = {
        id: Date.now(),
        title,
        completed: false,
        createdAt: new Date().toISOString(),
      };

      dispatch(createTaskThunk(newTask));
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
        <button onClick={handler}>Add</button>
      </div>
      <TaskList />
    </div>
  );
};

export default App;
