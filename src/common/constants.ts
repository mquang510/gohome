
export const defaultLength = 50
export const obstacleLength = 40
export const defaultObstacleSuperHard = 200
export const defaultObstacleHard = 100
export const defaultObstacleNormal = 50
export const defaultObstacleEasy = 20
export const defaultDiameterStartPoint = 20
export const windowWidth = window.innerWidth
export const windowHeight = window.innerHeight
export const windowMargin = 2
export const windowKeyDownEvent = "keydown"
export enum imageEnum {
    dog = "/image/dog.png",
    dinosaur = "/image/dinosaur.png",
    tiger = "/image/tiger.png",
    tyrannosaurus = "/image/tyrannosaurus.png",
}
export enum direction {
    top = 0,
    right = 1,
    bottom = 2,
    left = 3
}
export enum keydownEnum {
    arrowLeft = "ArrowLeft",
    arrowUp = "ArrowUp",
    arrowRight = "ArrowRight",
    arrowDown = "ArrowDown"
}

export const images = [imageEnum.dinosaur, imageEnum.dog, imageEnum.tiger, imageEnum.tyrannosaurus]
export const systemDirectRight = [direction.right, direction.bottom, direction.left]
export const systemDirectBottom = [direction.bottom, direction.right]
export const systemDirectTop = [direction.top, direction.right, direction.left]

export const amountPoints = [
    {
        "x": 710,
        "y": 678
    },
    {
        "x": 1202,
        "y": 98
    },
    {
        "x": 213,
        "y": 359
    },
    {
        "x": 599,
        "y": 659
    },
    {
        "x": 422,
        "y": 391
    },
    {
        "x": 155,
        "y": 575
    },
    {
        "x": 270,
        "y": 143
    },
    {
        "x": 875,
        "y": 266
    },
    {
        "x": 1430,
        "y": 320
    },
    {
        "x": 310,
        "y": 570
    },
    {
        "x": 1263,
        "y": 551
    },
    {
        "x": 958,
        "y": 208
    },
    {
        "x": 1336,
        "y": 66
    },
    {
        "x": 859,
        "y": 636
    },
    {
        "x": 756,
        "y": 261
    },
    {
        "x": 1071,
        "y": 643
    },
    {
        "x": 942,
        "y": 177
    },
    {
        "x": 1130,
        "y": 578
    },
    {
        "x": 1023,
        "y": 519
    },
    {
        "x": 278,
        "y": 577
    },
    {
        "x": 53,
        "y": 500
    },
    {
        "x": 1459,
        "y": 157
    },
    {
        "x": 105,
        "y": 240
    },
    {
        "x": 1395,
        "y": 336
    },
    {
        "x": 1239,
        "y": 374
    },
    {
        "x": 391,
        "y": 224
    },
    {
        "x": 483,
        "y": 608
    },
    {
        "x": 669,
        "y": 59
    },
    {
        "x": 1291,
        "y": 344
    },
    {
        "x": 742,
        "y": 145
    },
    {
        "x": 355,
        "y": 187
    },
    {
        "x": 263,
        "y": 375
    },
    {
        "x": 612,
        "y": 262
    },
    {
        "x": 691,
        "y": 488
    },
    {
        "x": 909,
        "y": 542
    },
    {
        "x": 818,
        "y": 156
    },
    {
        "x": 241,
        "y": 347
    },
    {
        "x": 1380,
        "y": 223
    },
    {
        "x": 749,
        "y": 459
    },
    {
        "x": 684,
        "y": 156
    },
    {
        "x": 370,
        "y": 490
    },
    {
        "x": 228,
        "y": 159
    },
    {
        "x": 1280,
        "y": 185
    },
    {
        "x": 1107,
        "y": 73
    },
    {
        "x": 1089,
        "y": 426
    },
    {
        "x": 753,
        "y": 186
    },
    {
        "x": 1456,
        "y": 240
    },
    {
        "x": 63,
        "y": 314
    },
    {
        "x": 1134,
        "y": 215
    },
    {
        "x": 465,
        "y": 539
    },
    {
        "x": 410,
        "y": 264
    },
    {
        "x": 840,
        "y": 486
    },
    {
        "x": 368,
        "y": 499
    },
    {
        "x": 930,
        "y": 610
    },
    {
        "x": 550,
        "y": 191
    },
    {
        "x": 1391,
        "y": 679
    },
    {
        "x": 552,
        "y": 528
    },
    {
        "x": 959,
        "y": 586
    },
    {
        "x": 1331,
        "y": 61
    },
    {
        "x": 1485,
        "y": 441
    },
    {
        "x": 910,
        "y": 215
    },
    {
        "x": 787,
        "y": 442
    },
    {
        "x": 1035,
        "y": 548
    },
    {
        "x": 1075,
        "y": 197
    },
    {
        "x": 1248,
        "y": 526
    },
    {
        "x": 114,
        "y": 379
    },
    {
        "x": 301,
        "y": 273
    },
    {
        "x": 449,
        "y": 333
    },
    {
        "x": 852,
        "y": 457
    },
    {
        "x": 162,
        "y": 455
    },
    {
        "x": 773,
        "y": 74
    },
    {
        "x": 700,
        "y": 428
    },
    {
        "x": 841,
        "y": 392
    },
    {
        "x": 1316,
        "y": 123
    },
    {
        "x": 169,
        "y": 273
    },
    {
        "x": 879,
        "y": 253
    },
    {
        "x": 1250,
        "y": 548
    },
    {
        "x": 274,
        "y": 264
    },
    {
        "x": 1131,
        "y": 126
    },
    {
        "x": 676,
        "y": 458
    },
    {
        "x": 630,
        "y": 308
    },
    {
        "x": 989,
        "y": 400
    },
    {
        "x": 371,
        "y": 224
    },
    {
        "x": 1374,
        "y": 224
    },
    {
        "x": 1311,
        "y": 281
    },
    {
        "x": 1077,
        "y": 133
    },
    {
        "x": 536,
        "y": 430
    },
    {
        "x": 587,
        "y": 247
    },
    {
        "x": 681,
        "y": 161
    },
    {
        "x": 789,
        "y": 74
    },
    {
        "x": 503,
        "y": 648
    },
    {
        "x": 906,
        "y": 315
    },
    {
        "x": 747,
        "y": 644
    },
    {
        "x": 260,
        "y": 96
    },
    {
        "x": 1171,
        "y": 373
    },
    {
        "x": 1076,
        "y": 551
    },
    {
        "x": 643,
        "y": 339
    },
    {
        "x": 1023,
        "y": 372
    },
    {
        "x": 428,
        "y": 445
    }
]