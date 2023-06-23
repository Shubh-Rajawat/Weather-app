import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice( {
    name: 'weather',
    initialState: {
        cityData: []
    },
    reducers: {
        storeData: ( state, action ) => {
            state.cityData = action.payload
        }
    }
} )

export const weatherActions = weatherSlice.actions
const weatherReducer = weatherSlice.reducer

export default weatherReducer;