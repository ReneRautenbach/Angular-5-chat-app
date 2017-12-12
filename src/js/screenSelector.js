import { notifications } from "./notifications";
const EventEmitter = require('events');

class ScreenSelector extends EventEmitter {

    constructor() {
        super();
        this.resetVisibility();
        this.on('loggedOut', this.onLoggedOut);
        this.on('selectRoom', this.onSelectRoom);
        this.on('inRoom', this.onInRoom);
        this.on('disconnected', this.onDisconnected);
        this.on('connecting', this.onConnecting);
    }

    onLoggedOut() {
        this.resetVisibility();
        document.querySelector('#loggedOut').style.display = 'block';
    }

    onSelectRoom() {
        this.resetVisibility();
        document.querySelector('#selectRoom').style.display = 'block';
    }

    onInRoom() {
        this.resetVisibility();
        document.querySelector('#inRoom').style.display = 'block';
    }
    onDisconnected() {
        this.resetVisibility();
        document.querySelector('#disconnected').style.display = 'block';
    }
    onConnecting() {
        this.resetVisibility();
        document.querySelector('#connecting').style.display = 'block';
    }

    resetVisibility() {
        this.screens = document.querySelectorAll('.screen');
        for (var i = 0; i < this.screens.length; i++) {
            this.screens[i].style.display = 'none';
        }
    }

}

export let screenSelector = new ScreenSelector();