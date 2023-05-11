let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
for (let index = 0; index < 4; index++) {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    basic.pause(3000)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    basic.pause(3000)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    basic.pause(3000)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
    basic.pause(3000)
}
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 0)
