basic.forever(function () {
    basic.showNumber(3 * pins.analogReadPin(AnalogPin.P0) / 1024)
    basic.showString(" V")
})
