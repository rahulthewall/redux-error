import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../user';

export const store = configureStore({
  reducer: {
    userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
