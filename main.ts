input.onButtonPressed(Button.A, function () {
    playMusic01()
})
function playMusic01 () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
}
basic.forever(function () {
	
})
