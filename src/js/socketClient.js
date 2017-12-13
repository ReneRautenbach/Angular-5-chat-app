import { notifications } from "./notifications";
import { messageHandler } from './messageHandler';
import { screenSelector } from './screenSelector';

class SocketClient {

    constructor(wsUri) {
        this.Uri = wsUri
    }

    connect() {

        //Open a WebSocket connection. 
        this.ws = new WebSocket(this.Uri);

        this.ws.onerror = () => notifications.add('WebSocket error');

        this.ws.onopen = () => {

            notifications.add('WebSocket connection established');
            let handle = document.querySelector('#handle').value;

            var msg = {
                type: "SET_HANDLE",
                handle: handle
            };
            this.ws.send(JSON.stringify(msg));

        };

        this.ws.onclose = () => {
            notifications.add('WebSocket connection closed');
            screenSelector.emit('loggedOut');

        };

        this.ws.onmessage = (ev) => {
            let data = JSON.parse(ev.data);
            notifications.add('WebSocket message ' + data.type + " | " + data.data);
            messageHandler.emit(data.type, data);
        }
    }

    get() {
        return this.ws;
    }

    disconnect() {
        var msg = {
            type: "DISCONNECT",
            handle: handle
        };
        this.ws.send(JSON.stringify(msg));
    }

    join(index) {
        this.ws.send(JSON.stringify({ 'type': 'JOIN', 'roomId': index }))
    }

    close() {
        this.ws.close();
    }

    say(message) {

        var msg = {
            type: "SAY",
            message: message
        };
        this.ws.send(JSON.stringify(msg));
    }

    exitRoom() {
        this.ws.send(JSON.stringify({ 'type': 'EXIT_ROOM' }));
        screenSelector.emit('selectRoom');
    }

    loadRooms() {
        this.ws.send(JSON.stringify({ 'type': 'ROOMS' }));
    }
}
var HOST = location.origin.replace(/^http/, 'ws')
console.log(HOST); 
export let wsc = new SocketClient(HOST);
