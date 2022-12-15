import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../stores'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
