import tasksSlice from "../../components/TaskComponent/tasks.slice.ts";
import { Api } from "../api";
import type { AppThunk } from "../store";

const initStoreThunk = (): AppThunk => 
    (dispatch) => {
        const tasks = Api.getTaskFromStorage()

        dispatch(tasksSlice.actions.initTasks(tasks))
    }

export default initStoreThunk