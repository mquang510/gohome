import React from 'react';
import SettingProvider from './context/SettingContext.tsx';

export const AppStoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <SettingProvider>{children}</SettingProvider>;
};