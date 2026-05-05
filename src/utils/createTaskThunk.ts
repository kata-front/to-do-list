import type { Task } from "./types";
import tasksSlice from "../components/TaskComponent/tasks.slice.";
import type { AppThunk } from "./store";


export const createTaskThunk = (task: Task): AppThunk => 
    (dispacth, getState) => {
        const tasks = tasksSlice.selectors.getTasks(getState());

        localStorage.setItem('tasks', JSON.stringify([...tasks, task]))

        dispacth(tasksSlice.actions.createTask(task))
    };