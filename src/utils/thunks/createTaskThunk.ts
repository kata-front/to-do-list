import type { Task } from "../types";
import tasksSlice from "../../components/TaskComponent/tasks.slice.ts";
import type { AppThunk } from "../store";
import { Api } from "../api";


export const createTaskThunk = (task: Task): AppThunk => 
    (dispacth) => {
        Api.saveTaskToStore(task);

        dispacth(tasksSlice.actions.createTask(task))
    };