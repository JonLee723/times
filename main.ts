input.onPinPressed(TouchPin.P0, function () {
    t0 = input.runningTime()
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    t1 = input.runningTime()
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        `)
    t = t1 - t0
    d = 30000
    v = d / t
    while (true) {
        basic.showNumber(v)
        basic.showString("m/s")
    }
})
let v = 0
let d = 0
let t = 0
let t1 = 0
let t0 = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
