import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import ideasReducer from '../features/idasSlice';
import candidatesReducer from '../features/candidatesSlice'

export const store = configureStore({
  reducer: {
    ideasState: ideasReducer,
    candidatesState: candidatesReducer
  },
});