import { createContext, useReducer, ReactNode, useEffect } from 'react';
import React from 'react';
import { animalRunningTime, firstTimeKey, obstacleLevel, settingsKey } from '../../utils/constants.ts';
import { settingReducer } from '../reducers/SettingReducer.ts';
import { SettingAction, SettingState } from '../../domain/Setting.ts';
import { settingActions } from '../../utils/enums.ts';

const initialState = {
    isFirstTime: true,
    config: {
        level: obstacleLevel.hard,
        time: animalRunningTime.hard
    }
}

export const SettingContext = createContext<{
    state: SettingState;
    dispatch: React.Dispatch<SettingAction>;
  }>({
    state: initialState,
    dispatch: () => null,
  });

export default function SettingProvider ({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(settingReducer, initialState);
  useEffect(() => {
    const localStorageIsFirstTime = localStorage.getItem(firstTimeKey)
    const isFirstTimeDefault = !!localStorageIsFirstTime ? JSON.parse(localStorageIsFirstTime) : true
    dispatch({ type: settingActions.setIsFirstTime, payload: {
        isFirstTime: isFirstTimeDefault
    }})
  }, [])

  useEffect(() => {
    const localStorageSettings = localStorage.getItem(settingsKey)
    const settingsDefault = !!localStorageSettings ? JSON.parse(localStorageSettings) : {
        level: obstacleLevel.hard,
        time: animalRunningTime.hard
    }
    dispatch({ type: settingActions.setConfig, payload: {
        config: settingsDefault
    }})
  }, [])
  
  return (
    <SettingContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingContext.Provider>
  )
}