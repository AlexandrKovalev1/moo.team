import { AppDispatchType } from '../../../providers/store/store.ts'
import { authApi } from '../api/authApi.ts'

const initialState = {
  isAuth: false,
}

export const authReducer = (
  state: InitialState = initialState,
  action: ActinsTypes
): InitialState => {
  switch (action.type) {
    case 'LOGIN': {
      return { ...state, isAuth: action.isAuth }
    }
    case 'LOGOUT': {
      return { ...state, isAuth: action.isAuth }
    }
    default: {
      return state
    }
  }
}

export const loginAC = () => {
  return { type: 'LOGIN', isAuth: true } as const
}

export const logOutAC = () => {
  return { type: 'LOGOUT', isAuth: false } as const
}

export const logOutTC = () => (dispatch: AppDispatchType) => {
  authApi.logOut().then(_ => dispatch(logOutAC()))
}

export const loginTC =
  (payload: { email: string; password: string }) => (dispatch: AppDispatchType) => {
    return authApi.login(payload).then(res => {
      if (res.data.token) {
        localStorage.setItem('token', res.data.token)
        dispatch(loginAC())
      }
    })
  }

type InitialState = typeof initialState
type ActinsTypes = ReturnType<typeof loginAC> | ReturnType<typeof logOutAC>
