import wolfImage from '../assets/wolf.png'
import dinosaurImage from '../assets/dinosaur.png'
import tigerImage from '../assets/tiger.png'
import tyrannosaurusImage from '../assets/tyrannosaurus.png'

export enum imageEnum {
    wolf = wolfImage,
    dinosaur = dinosaurImage,
    tiger = tigerImage,
    tyrannosaurus = tyrannosaurusImage,
}

export enum  settingActions {
    setIsFirstTime = 'SetIsFirstTime',
    setConfig = 'SetConfig'
}

export enum direction {
    top = 1,
    right = 2,
    bottom = 3,
    left = 4
}
export enum keydownEnum {
    arrowLeft = 'ArrowLeft',
    arrowUp = 'ArrowUp',
    arrowRight = 'ArrowRight',
    arrowDown = 'ArrowDown'
}