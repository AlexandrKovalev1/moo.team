import { AppDispatchType } from '../../../providers/store/store.ts'
import { getProfileApi } from '../api/profileApi.ts'

const initialState = {
  email: '',
  fullname: '',
  isCancelledPromise: false,
}

export const profileReducer = (state: StateType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'FETCH-PROFILE': {
      const { email, fullname } = action.payload
      return { ...state, email, fullname }
    }
    case 'SET_IS_CANCELED': {
      return { ...state, isCancelledPromise: action.isCanceled }
    }
    default: {
      return state
    }
  }
}

export const fetchProfileAC = (payload: { email: string; fullname: string }) => {
  return {
    type: 'FETCH-PROFILE',
    payload,
  } as const
}

const setIsCanceledAC = (isCanceled: boolean) => {
  return {
    type: 'SET_IS_CANCELED',
    isCanceled,
  } as const
}

export const fetchProfileTC = () => (dispatch: AppDispatchType) => {
  getProfileApi().then(res => res.data && dispatch(fetchProfileAC(res.data)))
}

type StateType = typeof initialState

type ActionTypes = ReturnType<typeof fetchProfileAC> | ReturnType<typeof setIsCanceledAC>
