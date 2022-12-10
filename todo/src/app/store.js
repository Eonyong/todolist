import { configureStore } from '@reduxjs/toolkit';
import UserLogin from '../features/Users/UserLogin';

export default configureStore({
  reducer: {
    userlogin: UserLogin,
  },
});