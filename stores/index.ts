import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './app'
import { wardrobeReducer } from './wardrobe'
import { modalsReducer } from './modals'

export const store = configureStore({
    reducer: {
        app: appReducer,
        modals: modalsReducer,
        wardrobe: wardrobeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
