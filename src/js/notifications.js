class Notifications {

    constructor() {
        this.messages = []
        this.notifications = document.querySelector('#notifications');
        this.notifications.innerHTML = '';
    }

    add(message) {
        this.messages.push(message);

        var node = document.createTextNode(`${this.messages.length} - ${message}`);

        var div = document.createElement("div");

        div.appendChild(node);
        this.notifications.appendChild(div);
        console.log('messages', this.messages);
    }
    clear() {
        this.notifications.clear();
    }
}

export let notifications = new Notifications();