let LL = 0
let RR = 0
let strip = neopixel.create(DigitalPin.P5, 18, NeoPixelMode.RGB)
k_Bit.OFFLed()
let backing = 1
basic.forever(function () {
    RR = pins.digitalReadPin(DigitalPin.P12)
    LL = pins.digitalReadPin(DigitalPin.P13)
    if (RR == 0 && LL == 1) {
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 80)
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Back, 30)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (RR == 1 && LL == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 80)
        k_Bit.Motor(MotorObs.RightSide, MotorDir.Back, 30)
    }
    if (RR == 1 && LL == 1) {
        backing = 1
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        k_Bit.run(DIR.RunForward, 30)
    }
    if (RR == 0 && LL == 0) {
        if (backing == 1) {
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            k_Bit.run(DIR.RunBack, 30)
            basic.pause(200)
            k_Bit.carStop()
            music.playTone(988, music.beat(BeatFraction.Whole))
            backing = 0
        }
    }
})
