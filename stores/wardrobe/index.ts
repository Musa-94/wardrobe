import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWardrobeContent, SetWardrobeContent, WardrobeType } from './types'
import { enableMapSet } from 'immer'

export interface IWardrobeState {
    top: IWardrobeContent[]
    tors: IWardrobeContent[]
    middle: IWardrobeContent[]
    footer: IWardrobeContent[]
    accessories: IWardrobeContent[]
    temps: IWardrobeContent[]
    collections: Map<number, IWardrobeContent[]>
}
enableMapSet()
const initialState: IWardrobeState = {
    accessories: [],
    top: [],
    tors: [],
    middle: [],
    footer: [],
    temps: [],
    collections: new Map(),
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
            state.collections.set(action.payload[0].id, action.payload)
        },
        deletePosition: (
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
            state.collections.clear()
        },
        deleteCollectionById: (state, action: PayloadAction<number>) => {
            state.collections.delete(action.payload)
        },
        hydrate: (state, action: PayloadAction<[IWardrobeContent[]]>) => {
            action.payload.forEach((collection) => {
                state.collections.set(collection[0].id, collection)
            })
        },
    },
})

export const wardrobeReducer = wardrobeSlice.reducer

export const wardrobeActions = wardrobeSlice.actions
