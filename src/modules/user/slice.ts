import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HttpError } from '../../types/common';
import { initialStateStub } from '../store';
import { I_Code, I_User, I_UserState } from './types';

const initialState: I_UserState = {
  loginUser: initialStateStub,
  refreshUser: initialStateStub,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoginStarted: (state, action: PayloadAction<I_Code>) => {
      return {
        ...state,
        loginUser: {
          isFetching: true,
          hasError: false,
          data: undefined,
          error: undefined,
        },
      };
    },
    userLoginSucceeded: (state, action: PayloadAction<I_User>) => {
      return {
        ...state,
        loginUser: {
          isFetching: false,
          hasError: false,
          data: action.payload,
          error: undefined,
        },
      };
    },
    userLoginFailed: (state, action: PayloadAction<HttpError>) => {
      return {
        ...state,
        loginUser: {
          isFetching: false,
          hasError: true,
          data: undefined,
          error: action.payload,
        },
      };
    },
    userRefreshStarted: (state) => {
      return {
        ...state,
        refreshUser: {
          isFetching: true,
          hasError: false,
          data: undefined,
          error: undefined,
        },
      };
    },
    userRefreshSucceeded: (state, action: PayloadAction<I_User>) => {
      return {
        ...state,
        refreshUser: {
          isFetching: false,
          hasError: false,
          data: action.payload,
          error: undefined,
        },
        loginUser: {
          isFetching: false,
          hasError: false,
          data: action.payload,
          error: undefined,
        },
      };
    },
    userRefreshFailed: (state, action: PayloadAction<HttpError>) => {
      return {
        ...state,
        refreshUser: {
          isFetching: false,
          hasError: true,
          data: undefined,
          error: action.payload,
        },
      };
    },
  },
});

export const {
  userLoginStarted,
  userLoginSucceeded,
  userLoginFailed,
  userRefreshStarted,
  userRefreshSucceeded,
  userRefreshFailed,
} = slice.actions;

export default slice.reducer;
