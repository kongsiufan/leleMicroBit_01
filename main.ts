input.onButtonPressed(Button.A, function () {
    playMusic01()
})
function playMusic01 () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playMelody("B E G A G B C5 G ", 120)
}
basic.forever(function () {
	
})
