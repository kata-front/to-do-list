import { configureStore, type ThunkAction, type UnknownAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import tasksSlice from "../components/Tasks/TaskComponent/tasks.slice.ts";
import { Router } from "react-router-dom";
import CountersSlice from "../components/Counters/counter.slice.ts";

const extraArguments = {
    router: Router
};

export const store = configureStore({
    reducer: {
        [tasksSlice.name]: tasksSlice.reducer,
        [CountersSlice.name]: CountersSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: extraArguments
        }
    })
})

type RootState = ReturnType<typeof store.getState>

export type AppThunk = ThunkAction<void, any, typeof extraArguments, UnknownAction>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()