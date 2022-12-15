import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAppState {
    activeMenu: string
}

const initialState: IAppState = {
    activeMenu: '',
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setActiveMenu: (state, action: PayloadAction<string>) => {
            state.activeMenu = action.payload
        },
    },
})

export const appReducer = appSlice.reducer

export const appActions = appSlice.actions
