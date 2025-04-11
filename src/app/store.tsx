import React from 'react';
import SettingProvider from './context/SettingContext';

export const AppStoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <SettingProvider>{children}</SettingProvider>;
};