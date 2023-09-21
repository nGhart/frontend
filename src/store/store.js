import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../appSlice/reminderSlice';

export const store = configureStore({
  reducer: {
    todosReducer: todosReducer,
  },
});
