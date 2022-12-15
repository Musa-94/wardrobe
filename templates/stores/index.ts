import { createSlice } from '@reduxjs/toolkit'

interface I_Name_State {}

const initialState: I_Name_State = {}

const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {},
})

export const nameReducer = nameSlice.reducer

export const nameActions = nameSlice.actions
