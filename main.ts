input.onButtonPressed(Button.A, function () {
    if (0 < 0) {
        basic.showString("<")
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (0 == 0) {
        basic.showString("=")
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    if (0 > 0) {
        basic.showString(">")
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Numero1 = 0
    basic.showNumber(0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    Numero2 = 0
    basic.showNumber(0)
})
let Numero2 = 0
let Numero1 = 0
Numero1 = 0
Numero2 = 0
