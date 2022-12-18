import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAppState {
    activeMenu: string
    isOpenSidebar: boolean
}

const initialState: IAppState = {
    activeMenu: '',
    isOpenSidebar: false,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setActiveMenu: (state, action: PayloadAction<string>) => {
            state.activeMenu = action.payload
        },
        toggleSidebar: (state) => {
            state.isOpenSidebar = !state.isOpenSidebar
        },
    },
})

export const appReducer = appSlice.reducer

export const appActions = appSlice.actions
