import { createStore, combineReducers, applyMiddleware, Action } from 'redux'
import { thunk, ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { infoPageReducer } from '../../pages/infoPage/model/infoPageReducer.ts'
import { authReducer } from '../../pages/loginPage/model/authReducer.ts'
import { profileReducer } from '../../pages/profilePage/model/profileReducer.ts'

const rootReducers = combineReducers({
  infoPage: infoPageReducer,
  auth: authReducer,
  profile: profileReducer,
})

export const store = createStore(rootReducers, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducers>
export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, Action>

export const useAppDispatch: () => AppDispatchType = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
