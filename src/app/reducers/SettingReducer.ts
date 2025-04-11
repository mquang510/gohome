import { SettingAction, SettingState } from "../../domain/Setting";
import { firstTimeKey, settingsKey } from "../../utils/constants";

export function settingReducer(state: SettingState, action: SettingAction): SettingState {
  switch (action.type) {
    case 'SetIsFirstTime':
        localStorage.setItem(firstTimeKey, JSON.stringify(action.payload.isFirstTime))
        return {...state, ...action.payload}
    case 'SetConfig':
        localStorage.setItem(settingsKey, JSON.stringify(action.payload.config))
        return {...state, ...action.payload}
    default:
        return state;
  }
}