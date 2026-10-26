input.onGesture(Gesture.TiltLeft, function () {
    radio.sendValue("xyz", 3)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendValue("xyz", 1)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendValue("xyz", 2)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendValue("xyz", 4)
})
radio.onReceivedValue(function (name, value) {
	
})
radio.setGroup(100)
basic.showNumber(100)
