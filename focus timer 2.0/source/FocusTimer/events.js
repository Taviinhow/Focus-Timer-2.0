import { controlsUnderTimer, controlsAsideTimer } from './elements.js'
import * as actions from './actions.js'

export function registerControls() {
    controlsUnderTimer.addEventListener('click', (event) => {
       const action = event.target.dataset.action
       if(typeof actions[action] != "function") {
        return
    }

    actions[action]()
    })

    controlsAsideTimer.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }
    
        actions[action]()
    })
}

