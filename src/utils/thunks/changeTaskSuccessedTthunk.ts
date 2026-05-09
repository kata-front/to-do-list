import tasksSlice from "../../components/Tasks/TaskComponent/tasks.slice";
import { Api } from "../api";
import type { AppThunk } from "../store";

const changeTaskSuccessedThunk = (id: number): AppThunk => 
    (dispatch) => {
        Api.changeTaskSuccessing(id)

        dispatch(tasksSlice.actions.changeTaskSuccessed(id))
    };

export default changeTaskSuccessedThunk