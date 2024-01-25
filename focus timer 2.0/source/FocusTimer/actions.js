import { minutes } from './elements.js'
import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'


export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')


    timer.countdown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function plusFiveMinutes() {
    state.minutes += 5
    timer.updateDisplay()
}

export function minusFiveMinutes() {
    
    if (state.minutes >= 5) {
        state.minutes -= 5

    } else {
        state.minutes = 0;
    }

    timer.updateDisplay() 
}

export function forestSound() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.forestAudio.play()
        return
    }

    sounds.forestAudio.pause()
}

export function rainSound() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.rainAudio.play()
        return
    }

    sounds.rainAudio.pause()
}

export function coffeeSound() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.coffeeAudio.play()
        return
    }

    sounds.coffeeAudio.pause()
}

export function firecampSound() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.firecampAudio.play()
        return
    }

    sounds.firecampAudio.pause()
}
