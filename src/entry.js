import { screenSelector } from './js/screenSelector.js';    
import { messageHandler } from './js/messageHandler.js';    
import { notifications } from "./js/notifications"; 
import { wsc } from "./js/socketClient"; 
 
let WebSocketClient = wsc;
 
//default screen
screenSelector.emit('loggedOut');

// dom elements 
let btnConnect = document.querySelector('#btnConnect'); 
let btnSay = document.querySelector('#btnSay');
let btnExitRoom = document.querySelector('#btnExitRoom'); 
let btnDisconnect = document.querySelector('#btnDisconnect');

// connect to websocket and setHandle
btnConnect.onclick = () => { 
    
    screenSelector.emit('connecting');
    console.log(WebSocketClient);  

    let handle  = document.querySelector('#handle').value;
    document.querySelector('#name').innerHTML = handle; 
    WebSocketClient.connect();
  };
 
btnDisconnect.onclick = () => {  
    screenSelector.emit('connecting');  
    WebSocketClient.disconnect();
};

btnExitRoom.onclick = () => { 
    
    screenSelector.emit('connecting');  
    WebSocketClient.exitRoom();
}

btnSay.onclick = () => { 
      
    let message  = document.querySelector('#chatText').value;
    
    if(message>'') { 
        WebSocketClient.say(message);
        document.querySelector('#chatText').value = '';
        document.querySelector('#chatText').focus();
    }
}
   
document.querySelector('#chatText').addEventListener('keypress', (event) => {
    const keyName = event.key;
    if(keyName == 'Enter') {
        btnSay.click();
    }
    return;

  });
 