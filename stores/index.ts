import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from './app'
import { wardrobeReducer } from './wardrobe'

export const store = configureStore({
    reducer: {
        app: appReducer,
        wardrobe: wardrobeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
