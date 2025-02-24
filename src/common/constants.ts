
export const defaultLength = 50
export const obstacleLength = 40
export const diameterStartPoint = 20
export const diameterEndPoint = 20
export const windowWidth = window.innerWidth
export const windowHeight = window.innerHeight
export const windowMinWidth = 0
export const windowMinHeight = 0
export const windowMargin = 2
export const endpointMarginRow = 2
export const windowKeyDownEvent = 'keydown'
export const px = 'px'
export const firstTimeKey = 'isFirstTime'
export const settingsKey = 'settings'
export const f1 = 'F1'
export const startPoint = {
    x: 50,
    y: 50
}
export const obstacleLevel = {
    easy: 20,
    normal: 50,
    hard: 100,
    superHard: 200,
    extremely: 300
}
export const animalRunningTime = {
    easy: 5000,
    normal: 3000,
    hard: 2000,
    superHard: 1000,
    extremely: 500
}
export enum imageEnum {
    wolf = '/image/wolf.png',
    dinosaur = '/image/dinosaur.png',
    tiger = '/image/tiger.png',
    tyrannosaurus = '/image/tyrannosaurus.png',
}
export const obstacleObjects = [
    {
        index: 0,
        width: 50,
        height: 30,
        image: imageEnum.wolf
    },
    {
        index: 1,
        width: 50,
        height: 30,
        image: imageEnum.dinosaur
    },
    {
        index: 2,
        width: 50,
        height: 30,
        image: imageEnum.tiger
    },
    {
        index: 3,
        width: 50,
        height: 40,
        image: imageEnum.tyrannosaurus
    }
]
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

export const systemDirectRight = [direction.right, direction.bottom, direction.left]
export const systemDirectBottom = [direction.bottom, direction.right]
export const systemDirectTop = [direction.top, direction.right, direction.left]

export const amountPoints = [
    {
        'x': 1180,
        'y': 130,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 1361,
        'y': 213,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 184,
        'y': 169,
        'src': '/image/dog.png'
    },
    {
        'x': 6,
        'y': 214,
        'src': '/image/dog.png'
    },
    {
        'x': 241,
        'y': 566,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 623,
        'y': 84,
        'src': '/image/dog.png'
    },
    {
        'x': 767,
        'y': 270,
        'src': '/image/dog.png'
    },
    {
        'x': 1460,
        'y': 121,
        'src': '/image/tiger.png'
    },
    {
        'x': 1224,
        'y': 95,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 290,
        'y': 575,
        'src': '/image/dog.png'
    },
    {
        'x': 766,
        'y': 640,
        'src': '/image/dog.png'
    },
    {
        'x': 861,
        'y': 466,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 1481,
        'y': 151,
        'src': '/image/dog.png'
    },
    {
        'x': 1069,
        'y': 65,
        'src': '/image/dog.png'
    },
    {
        'x': 510,
        'y': 308,
        'src': '/image/dog.png'
    },
    {
        'x': 41,
        'y': 599,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 1228,
        'y': 138,
        'src': '/image/dog.png'
    },
    {
        'x': 489,
        'y': 389,
        'src': '/image/dog.png'
    },
    {
        'x': 620,
        'y': 343,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 1183,
        'y': 226,
        'src': '/image/dog.png'
    },
    {
        'x': 128,
        'y': 644,
        'src': '/image/tiger.png'
    },
    {
        'x': 1104,
        'y': 683,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 655,
        'y': 603,
        'src': '/image/dog.png'
    },
    {
        'x': 1247,
        'y': 482,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 617,
        'y': 11,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 1161,
        'y': 55,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 1267,
        'y': 205,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 354,
        'y': 431,
        'src': '/image/dog.png'
    },
    {
        'x': 836,
        'y': 157,
        'src': '/image/tiger.png'
    },
    {
        'x': 1072,
        'y': 107,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 1025,
        'y': 452,
        'src': '/image/tiger.png'
    },
    {
        'x': 1452,
        'y': 567,
        'src': '/image/tiger.png'
    },
    {
        'x': 1080,
        'y': 348,
        'src': '/image/tiger.png'
    },
    {
        'x': 846,
        'y': 303,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 545,
        'y': 440,
        'src': '/image/tiger.png'
    },
    {
        'x': 1054,
        'y': 604,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 1168,
        'y': 518,
        'src': '/image/dog.png'
    },
    {
        'x': 212,
        'y': 425,
        'src': '/image/tiger.png'
    },
    {
        'x': 1375,
        'y': 6,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 55,
        'y': 58,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 1117,
        'y': 106,
        'src': '/image/tiger.png'
    },
    {
        'x': 60,
        'y': 687,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 9,
        'y': 375,
        'src': '/image/dog.png'
    },
    {
        'x': 647,
        'y': 114,
        'src': '/image/dog.png'
    },
    {
        'x': 91,
        'y': 637,
        'src': '/image/tiger.png'
    },
    {
        'x': 343,
        'y': 233,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 154,
        'y': 156,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 781,
        'y': 54,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 1193,
        'y': 122,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 773,
        'y': 427,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 792,
        'y': 190,
        'src': '/image/dog.png'
    },
    {
        'x': 355,
        'y': 492,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 46,
        'y': 512,
        'src': '/image/tiger.png'
    },
    {
        'x': 1131,
        'y': 277,
        'src': '/image/tiger.png'
    },
    {
        'x': 192,
        'y': 316,
        'src': '/image/dog.png'
    },
    {
        'x': 493,
        'y': 457,
        'src': '/image/tiger.png'
    },
    {
        'x': 1203,
        'y': 216,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 850,
        'y': 312,
        'src': '/image/dog.png'
    },
    {
        'x': 176,
        'y': 483,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 1474,
        'y': 101,
        'src': '/image/tiger.png'
    },
    {
        'x': 1442,
        'y': 236,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 614,
        'y': 670,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 641,
        'y': 659,
        'src': '/image/dog.png'
    },
    {
        'x': 979,
        'y': 327,
        'src': '/image/tiger.png'
    },
    {
        'x': 544,
        'y': 416,
        'src': '/image/dog.png'
    },
    {
        'x': 579,
        'y': 225,
        'src': '/image/dog.png'
    },
    {
        'x': 1140,
        'y': 516,
        'src': '/image/tiger.png'
    },
    {
        'x': 499,
        'y': 618,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 1080,
        'y': 209,
        'src': '/image/dog.png'
    },
    {
        'x': 125,
        'y': 580,
        'src': '/image/tiger.png'
    },
    {
        'x': 548,
        'y': 517,
        'src': '/image/tiger.png'
    },
    {
        'x': 253,
        'y': 126,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 1010,
        'y': 13,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 397,
        'y': 319,
        'src': '/image/tiger.png'
    },
    {
        'x': 422,
        'y': 139,
        'src': '/image/tiger.png'
    },
    {
        'x': 556,
        'y': 310,
        'src': '/image/tiger.png'
    },
    {
        'x': 970,
        'y': 647,
        'src': '/image/tiger.png'
    },
    {
        'x': 917,
        'y': 236,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 1300,
        'y': 164,
        'src': '/image/tiger.png'
    },
    {
        'x': 1089,
        'y': 529,
        'src': '/image/dog.png'
    },
    {
        'x': 1476,
        'y': 181,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 1094,
        'y': 551,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 654,
        'y': 467,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 377,
        'y': 311,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 977,
        'y': 299,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 1034,
        'y': 91,
        'src': '/image/tiger.png'
    },
    {
        'x': 1451,
        'y': 141,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 1385,
        'y': 308,
        'src': '/image/tiger.png'
    },
    {
        'x': 610,
        'y': 52,
        'src': '/image/tiger.png'
    },
    {
        'x': 1218,
        'y': 419,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 331,
        'y': 15,
        'src': '/image/tiger.png'
    },
    {
        'x': 852,
        'y': 9,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 1288,
        'y': 662,
        'src': '/image/tiger.png'
    },
    {
        'x': 382,
        'y': 6,
        'src': '/image/dog.png'
    },
    {
        'x': 1180,
        'y': 645,
        'src': '/image/dinosaur.png'
    },
    {
        'x': 19,
        'y': 131,
        'src': '/image/dog.png'
    },
    {
        'x': 811,
        'y': 545,
        'src': '/image/dog.png'
    },
    {
        'x': 770,
        'y': 93,
        'src': '/image/tyrannosaurus.png'
    },
    {
        'x': 353,
        'y': 105,
        'src': '/image/dog.png'
    },
    {
        'x': 982,
        'y': 270,
        'src': '/image/dinosaur.png'
    }
]