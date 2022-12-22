import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWardrobeContent, SetWardrobeContent, WardrobeType } from './types'

export interface IWardrobeState {
    top: IWardrobeContent[]
    tors: IWardrobeContent[]
    middle: IWardrobeContent[]
    footer: IWardrobeContent[]
    accessories: IWardrobeContent[]
    temps: IWardrobeContent[]
    collections: [IWardrobeContent[]] | []
}

const initialState: IWardrobeState = {
    accessories: [],
    top: [],
    tors: [],
    middle: [],
    footer: [],
    temps: [],
    collections: [],
}

const wardrobeSlice = createSlice({
    name: 'wardrobe',
    initialState,
    reducers: {
        setWardrobeData: (state, action: PayloadAction<SetWardrobeContent>) => {
            const { wardrobeType, image, name, id } = action.payload

            state[wardrobeType] = [
                {
                    image,
                    name,
                    id,
                },
            ]
        },
        saveCollections: (state, action: PayloadAction<IWardrobeContent[]>) => {
            if (!state.collections.length) {
                state.collections = [action.payload]

                return
            }

            state.collections.push(action.payload)
        },
        delete: (
            state,
            action: PayloadAction<{ position: WardrobeType; id: number }>
        ) => {
            const { position, id } = action.payload

            state[position] = state[position].filter((item) => item.id !== id)
        },
        clearSelectedCollection: (state) => {
            state.top = []
            state.tors = []
            state.middle = []
            state.footer = []
        },
        clearSavedCollections: (state) => {
            state.collections = []
        },
        hydrate: (state, action) => {
            state.collections = action.payload
        },
    },
})

export const wardrobeReducer = wardrobeSlice.reducer

export const wardrobeActions = wardrobeSlice.actions
