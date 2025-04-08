import React from 'react';
import AuthProvider from './context/AuthContext.tsx';

export const AppStoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};