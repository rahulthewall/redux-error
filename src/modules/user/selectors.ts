import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

const userState = (state: RootState) => state.userReducer;

export const user = createSelector([userState], (userSlice) => userSlice.loginUser.data);
export const userIsLoggingIn = createSelector([userState], (userSlice) => userSlice.loginUser.isFetching);
export const userLoginHasError = createSelector([userState], (userSlice) => userSlice.loginUser.hasError);

export const refreshUser = createSelector([userState], (userSlice) => userSlice.refreshUser.data);
export const userIsRefreshing = createSelector([userState], (userSlice) => userSlice.refreshUser.isFetching);
export const userRefrehHasError = createSelector([userState], (userSlice) => userSlice.refreshUser.hasError);
