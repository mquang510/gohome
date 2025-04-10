export type SettingState = { 
    isFirstTime?: boolean,
    config?: {
        level: number,
        time: number
    }
}

export type SettingAction = { 
    type: 'SetIsFirstTime' | 'SetConfig',
    payload: SettingState
}