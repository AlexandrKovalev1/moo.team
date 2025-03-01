const initialState = {
  isAuth: false,
}

export const authReducer = (state: InitialState = initialState, action: any): InitialState => {
  switch (action) {
    default: {
      return state
    }
  }
}

type InitialState = typeof initialState
