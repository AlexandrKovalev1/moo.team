import { createStore, combineReducers, applyMiddleware, Action } from 'redux'
import { thunk, ThunkDispatch } from 'redux-thunk'
import { useDispatch } from 'react-redux'
import { infoPageReducer } from '../../pages/infoPage/model/infoPageReducer.ts'

const rootReducers = combineReducers({ infoPage: infoPageReducer })

export const store = createStore(rootReducers, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducers>
export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, Action>

export const useAppDispatch: () => AppDispatchType = useDispatch
