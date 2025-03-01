import { AppDispatchType } from '../../../providers/store/store.ts'
import { getAboutInfoAPI } from '../api/aboutApi.ts'

const initialState = {
  description: '',
}

export const infoPageReducer = (state: StateType = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'FETCH-ABOUT-INFO': {
      return { ...state, description: action.description }
    }
    default: {
      return state
    }
  }
}

export const fetchAboutInfoAC = (description: string) => {
  return {
    type: 'FETCH-ABOUT-INFO',
    description,
  } as const
}

export const fetchAboutInfoTC = () => (dispatch: AppDispatchType) => {
  getAboutInfoAPI().then(res => res.data.info && dispatch(fetchAboutInfoAC(res.data.info)))
}

type StateType = typeof initialState

type ActionTypes = ReturnType<typeof fetchAboutInfoAC>
