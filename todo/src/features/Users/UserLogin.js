import { createSlice } from "@reduxjs/toolkit";

const userLogin = createSlice({
  name: "userlogin",
  initialState: {
    value: false,
  },
  reducers: {
    userlogin(state, action) {
      state.value = true
    },
    userlogout(state, action) {
      state.value = false
    },
    
  }
})

const { actions, reducer } = userLogin

export const { userlogin, userlogout } = actions

export default reducer