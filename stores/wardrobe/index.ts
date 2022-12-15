import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWardrobeContent, SetWardrobeContent } from './types'

export interface IWardrobeState {
    top: IWardrobeContent
    tors: IWardrobeContent
    middle: IWardrobeContent
    footer: IWardrobeContent
    accessories: IWardrobeContent
}

const wardrobeContent = {
    name: '',
    image: '',
}

const initialState: IWardrobeState = {
    accessories: { ...wardrobeContent },
    top: { ...wardrobeContent },
    tors: { ...wardrobeContent },
    middle: { ...wardrobeContent },
    footer: { ...wardrobeContent },
}

const wardrobeSlice = createSlice({
    name: 'wardrobe',
    initialState,
    reducers: {
        setWardrobeData: (state, action: PayloadAction<SetWardrobeContent>) => {
            const { wardrobeType, image, name } = action.payload

            state[wardrobeType] = {
                image,
                name,
            }
        },
    },
})

export const wardrobeReducer = wardrobeSlice.reducer

export const wardrobeActions = wardrobeSlice.actions
