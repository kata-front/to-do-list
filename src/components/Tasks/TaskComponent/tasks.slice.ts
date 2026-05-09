import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../../../utils/types";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  selectors: {
    getTasks: (state: Task[]) => state,
  },
  reducers: {
    createTask: (state: Task[], action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    initTasks: (state: Task[], action: PayloadAction<Task[]>) => {
      state.push(...action.payload);
    },
    changeTaskSuccessed: (state: Task[], action: PayloadAction<number>) => {
      state.map(task => {
            task.id === action.payload 
                ? task.completed = !task.completed
                : task
        })
    }
  },
}); 

export const { createTask } = tasksSlice.actions;
export default tasksSlice;