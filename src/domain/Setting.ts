import { settingActions } from '../utils/enums'

export type SettingState = { 
    isFirstTime?: boolean,
    config?: {
        level: number,
        time: number
    }
}

export type SettingAction = { 
    type: settingActions.setIsFirstTime | settingActions.setConfig,
    payload: SettingState
}