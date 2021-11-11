input.onPinPressed(TouchPin.P0, function () {
    if (score < 10) {
        score += 1
        basic.showIcon(IconNames.Happy)
        soundExpression.happy.play()
        basic.showNumber(score)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        soundExpression.twinkle.playUntilDone()
    }
})
input.onButtonPressed(Button.B, function () {
    score = 0
    basic.showNumber(score)
})
let score = 0
let flip = 0
basic.showString("start")
soundExpression.hello.playUntilDone()
while (!(input.buttonIsPressed(Button.A))) {
    if (flip) {
        basic.showIcon(IconNames.Diamond)
        flip = 0
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        flip = 1
    }
    basic.pause(200)
}
basic.clearScreen()
