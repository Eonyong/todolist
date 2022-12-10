import { configureStore } from '@reduxjs/toolkit';
import { userLogin } from '../features/Users/UserLogin';

export const store = configureStore({
  reducer: {
    userlogin: userLogin,
  }
})