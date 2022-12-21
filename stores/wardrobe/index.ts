import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IWardrobeContent, SetWardrobeContent, WardrobeType } from './types'
import { webStorage } from '@/utils/web-storage/web-storage'
import { WebStorage } from '@/constants/web-storage/web-storage'

export interface IWardrobeState {
    top: IWardrobeContent[]
    tors: IWardrobeContent[]
    middle: IWardrobeContent[]
    footer: IWardrobeContent[]
    accessories: IWardrobeContent[]
    temps: IWardrobeContent[]
    collections: [IWardrobeContent[]]
}

const initialState: IWardrobeState = {
    accessories: [],
    top: [],
    tors: [],
    middle: [],
    footer: [],
    temps: [],
    collections: webStorage.getLocalStorage<[IWardrobeContent[]]>(
        WebStorage.COLLECTIONS
    ) || [[]],
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
            const [collection] = state.collections

            if (!collection.length) {
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
    },
})

export const wardrobeReducer = wardrobeSlice.reducer

export const wardrobeActions = wardrobeSlice.actions
