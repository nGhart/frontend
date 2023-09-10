import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../appSlice/appSlice';
import todosReducer from '../appSlice/reminderSlice';

export const store = configureStore({
  reducer: {
    userReducer: appReducer,
    todosReducer: todosReducer,
  },
});
