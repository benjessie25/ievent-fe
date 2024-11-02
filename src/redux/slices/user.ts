import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'

import type { User } from '@/types/user/userTypes';
import { rolesEnum } from '@/types/user/userTypes'

// ----------------------------------------------------------------------
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  count: number;
  isInitialized: boolean;
}

// initial state
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  count: 0,
  isInitialized: false,
};

// slice
const slice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setLogin(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    setLogout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },

    setCount(state) {
      state.count = state.count + 1;
    },
    setInitialize(state) {
      state.isInitialized = true;
    },
    updateStatus(state, action:PayloadAction<string>) {
      if (state.user) {
        state.user.status = action.payload;
      }
    },
    verifyUser(state) {
      if (state.user) {
        state.user.isVerified = true;
      }
    },
    updateUserRole(state) {
      if (state.user) {
        state.user.role = rolesEnum.user;
      }
    },
  }
});

// Reducer
export default slice.reducer;

// Actions
export const {
  setLogin,
  setLogout,
  setCount,
  setInitialize,
  updateStatus,
  verifyUser,
  updateUserRole,
} = slice.actions;

// ----------------------------------------------------------------------
