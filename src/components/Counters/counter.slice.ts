import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CountersState } from "../../utils/types";

const CountersSlice = createSlice({
    name: 'counters',
    initialState: {},
    selectors: {
        selectCounter: (state: CountersState, counterId: string) => state[counterId] || 0
    },
    reducers: {
        increment: (state: CountersState, action: PayloadAction<string>) => {
            state[action.payload] = (state[action.payload] || 0) + 1
        },

        decrement: (state: CountersState, action: PayloadAction<string>) => {
            state[action.payload] = (state[action.payload] || 0) - 1
        }
    }
})

export default CountersSlice