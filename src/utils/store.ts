import { configureStore, type ThunkAction, type UnknownAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import tasksSlice from "../components/TaskComponent/tasks.slice.";
import { Router } from "react-router-dom";

const extraArguments = {
    router: Router
};

export const store = configureStore({
    reducer: {
        [tasksSlice.name]: tasksSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: extraArguments
        }
    })
})

export type AppThunk = ThunkAction<void, any, typeof extraArguments, UnknownAction>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()