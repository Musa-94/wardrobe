import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Themes } from '../../themes/types'

interface IAppState {
    theme: Themes
    activeMenu: string
    isOpenSidebar: boolean
}

const initialState: IAppState = {
    theme: Themes.DARK,
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
        toggleTheme: (state) => {
            state.theme =
                state.theme === Themes.DARK ? Themes.LIGHT : Themes.DARK
        },
    },
})

export const appReducer = appSlice.reducer

export const appActions = appSlice.actions
