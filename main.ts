music.playTone(440, music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Whole))
music.playTone(415, music.beat(BeatFraction.Whole))
music.playTone(415, music.beat(BeatFraction.Double))
basic.pause(400)
music.playTone(415, music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(415, music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(415, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Double))
basic.showLeds(`
    . # . # .
    . . . . .
    . . # . .
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # . # .
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    `)
basic.showLeds(`
    . # . # .
    . . . . .
    . . . . .
    . # # # .
    # . . . #
    `)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    . # # # .
    . # . # .
    . # . # .
    `)
basic.showLeds(`
    . # . # .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.pause(200)
basic.showLeds(`
    . . # . .
    . # . # .
    . # . # .
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
basic.pause(200)
basic.showLeds(`
    . # # . .
    . # . # .
    . # # . .
    . # . . .
    . # . . .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    . # . # .
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `)
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . # . . .
    . # # # .
    `)
basic.pause(200)
basic.showIcon(IconNames.Heart)
basic.pause(300)
basic.showString("Indication!")
let strip = neopixel.create(DigitalPin.P0, 16, NeoPixelMode.RGB_RGB)
basic.forever(function () {
    for (let index = 0; index <= 15; index++) {
        strip.setBrightness(10)
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(1000)
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        basic.pause(1000)
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(1000)
    }
})
