import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum ModalName {
    PREVIEW = 'preview',
}

interface ModalContent {
    open: boolean
    context: any
}
interface IModalsState {
    [ModalName.PREVIEW]: ModalContent
}

const initialState: IModalsState = {
    [ModalName.PREVIEW]: {
        open: false,
        context: null,
    },
}

const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openModal: (
            state,
            action: PayloadAction<{
                modalType: ModalName
                context?: any
            }>
        ) => {
            const { modalType, context } = action.payload

            state[modalType].open = true
            state[modalType].context = context
        },
        closeModal: (state, action: PayloadAction<ModalName>) => {
            state[action.payload].open = false
            state[action.payload].context = null
        },
    },
})

export const modalsReducer = modalsSlice.reducer

export const modalsActions = modalsSlice.actions
