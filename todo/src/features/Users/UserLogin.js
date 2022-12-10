import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: false,
}

export const userLogin = createSlice({
  name: 'logintf',
  initialState,
  reducers: {
    setlogin: (state, action) => {
      state.value = true
    },
    setlogout: (state, action) => {
      state.value = false
    }
  }
})

export const { setlogin, setlogout } = userLogin.actions

export const showlogin = state => state.logintf.value

export default userLogin.reducer