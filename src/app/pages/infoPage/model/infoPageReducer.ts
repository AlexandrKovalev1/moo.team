const initialState = {
  description: '',
}

export const infoPageReducer = (state: StateType = initialState, action: any) => {
  switch (action) {
    default: {
      return state
    }
  }
}

type StateType = typeof initialState
