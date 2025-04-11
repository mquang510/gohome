import { createContext, useReducer, ReactNode } from 'react';
import { authReducer } from '../reducers/AuthReducer';
import React from 'react';

const initialState = {
  isAuthenticated: false,
};

export const AuthContext = createContext<any>(null);

export default function AuthProvider ({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};