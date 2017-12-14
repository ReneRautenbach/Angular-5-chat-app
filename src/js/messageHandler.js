import { notifications } from "./notifications";
import { screenSelector } from './screenSelector';
import { wsc } from "./socketClient";

const EventEmitter = require('events'); 
let WebSocketClient = wsc;

class MessageHandler extends EventEmitter { 

    constructor() {
        super();
        this.on('SET_HANDLE_SUCCESS', function (data) { this.setHandleSuccess(data) });
        this.on('SET_HANDLE_FAIL', function (data) { this.setHandleFail(data) });
        this.on('ROOMS', function (data) { this.setRooms(data) });
        this.on('ON_SAY', function (data) { this.setOnSay(data) });
        this.on('SET_DISCONNECT_SUCCESS', function (data) { this.setDisconnectSuccess(data) });
        this.on('JOIN_SUCCESS', function (data) { this.setJoinSuccess(data) });
    }

    setHandleSuccess(data) {

        notifications.add("setHandleSuccess");
        this.username = data.data;
        if (data.success) {
            WebSocketClient.loadRooms();
        }
    }

    setHandleFail(data) {
        console.log(data);
        notifications.add("Connection Error: " + data.data);
    }


    setRooms(data) {

        // show the correct screen
        screenSelector.emit('selectRoom');

        let rooms = [];
        if (data.data) {
            rooms = data.data;
        }

        let chat_rooms = document.querySelector('#chat_rooms');
        chat_rooms.innerHTML = '';

        rooms.forEach((element, index) => {

            let li = document.createElement('li');

            let a = document.createElement('a');
            a.id = index;
            a.className = 'btnRoom';
            a.href = "#";
            a.onclick = () => {
                WebSocketClient.join(index);
            };

            let node = document.createTextNode(element);
            a.appendChild(node);
            li.appendChild(a);
            chat_rooms.appendChild(li);
        });
    }

    setOnSay(data) {
        let chat = document.querySelector('#chat_area');
        let div = document.createElement('div');

        div.innerHTML = data.data;
        chat.appendChild(div);
    }

    setDisconnectSuccess(data) {
        if (data.success) {
            WebSocketClient.close();
        }
    }

    setJoinSuccess(data) {
        // show the correct screen
        screenSelector.emit('inRoom');
        this.room = data.data;
        document.querySelector('#chatText').value = '';
        document.querySelector('#chat_area').innerHTML = '';
        document.querySelector('#roomName').innerHTML = '';
        document.querySelector('#roomName').innerHTML = "Hi " + this.username + ". You are in " + this.room + ".";
    }
}

export let messageHandler = new MessageHandler();