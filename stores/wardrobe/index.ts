import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWardrobeContent, SetWardrobeContent, WardrobeType } from './types'

export interface IWardrobeState {
    top: IWardrobeContent[]
    tors: IWardrobeContent[]
    middle: IWardrobeContent[]
    footer: IWardrobeContent[]
    accessories: IWardrobeContent[]
    temps: IWardrobeContent[]
}

const initialState: IWardrobeState = {
    accessories: [],
    top: [],
    tors: [],
    middle: [],
    footer: [],
    temps: [],
}

const wardrobeSlice = createSlice({
    name: 'wardrobe',
    initialState,
    reducers: {
        setWardrobeData: (state, action: PayloadAction<SetWardrobeContent>) => {
            const { wardrobeType, image, name, id } = action.payload

            state[wardrobeType].push({
                image,
                name,
                id,
            })
        },
        delete: (state, action: PayloadAction<WardrobeType>) => {
            const wardrobeType = action.payload

            state[wardrobeType] = []
        },
    },
})

export const wardrobeReducer = wardrobeSlice.reducer

export const wardrobeActions = wardrobeSlice.actions
