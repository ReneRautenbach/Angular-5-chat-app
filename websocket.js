const WebSocket = require('ws');

const WebSocketServer = WebSocket.Server;

// Map[socket,username]
let ChatClientUsers = new Map();
// Map[socket, roomId]
let ChatClientRooms = new Map();

module.exports = (server, sessionMiddleware) => {

  // wss is the web socket server 
  const wss = new WebSocketServer({ server: server });

  wss.rooms = ['PHP', 'Angular', 'Javascript', 'Java', 'C#'];

  // Emitted when the handshake is complete
  wss.on('connection', function (socket) {

    // server receives a message
    socket.on('message', function (request) {

      let received = '';

      try {
        received = JSON.parse(request)
      } catch (e) {
        console.log(e)
      }

      switch (received.type) {

        case "SET_HANDLE":
          try {
            if (received.handle) {
              var username = received.handle;

              if (wss.isUsernameAvailable(username)) {
                //reference to the socket to enable sending when broadcast
                ChatClientUsers.set(socket, username);
                //wrapper around socket send
                wss.sendMessage(socket, 'SET_HANDLE_SUCCESS', username, true);

              } else {
                throw "Username in use. Please choose a different name.";
              }
            } else {
              throw "Username required";
            }
          } catch (e) {
            wss.sendMessage(socket, 'SET_HANDLE_FAIL', e, false);
          }

          break;

        case "ROOMS":
          wss.sendMessage(socket, 'ROOMS', wss.rooms, true);
          break;


        case "DISCONNECT":
          ChatClientUsers.delete(socket);
          ChatClientRooms.delete(socket);
          wss.sendMessage(socket, 'SET_DISCONNECT_SUCCESS', '', true);
          socket.close();
          break;

        case "JOIN":
          // replaces roomId, if entry exist
          ChatClientRooms.set(socket, received.roomId);
          let room = wss.rooms[received.roomId];
          wss.sendMessage(socket, 'JOIN_SUCCESS', room, true);
          wss.broadcastOthersInRoom(socket, ChatClientUsers.get(socket) + ' joins the room.');

          break;


        case "SAY":
          wss.broadcastAllInRoom(socket, ChatClientUsers.get(socket) + ': ' + received.message);
          break;


        case "EXIT_ROOM":
          wss.broadcastOthersInRoom(socket, ChatClientUsers.get(socket) + ' leaves the room.');
          ChatClientRooms.delete(socket);
          break;

      }


    })

    socket.on('close', function () {
      wss.broadcastOthersInRoom(socket, ChatClientUsers.get(socket) + ' logged out.');
      ChatClientRooms.delete(socket);
      ChatClientUsers.delete(socket);
    })

  })

  wss.showclients = function () {
    ChatClientUsers.forEach((value, key) => {
      console.log("user : " + key + " : " + value);
    });
  }

  // wrapper around send message to a client
  wss.sendMessage = function (client, type, message, success) {
    client.send(JSON.stringify({ 'type': type, 'success': success, 'data': message }));
  }

  // filter users in room
  wss.getClientsByRoom = (roomId) => {
    return new Map(
      [...ChatClientRooms]
        .filter(([k, v]) => v == roomId)
    );
  }

  wss.broadcastOthersInRoom = (ws, data) => {
    var roomId = ChatClientRooms.get(ws)
    var users = wss.getClientsByRoom(roomId);

    users.forEach((roomId, client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        wss.sendMessage(client, "ON_SAY", data, true)
      }
    });
  }

  wss.broadcastAllInRoom = (ws, data) => {
    var roomId = ChatClientRooms.get(ws)
    var users = wss.getClientsByRoom(roomId);

    users.forEach((roomId, client) => {
      if (client.readyState === WebSocket.OPEN) {
        wss.sendMessage(client, "ON_SAY", data, true)
      }
    });
  }


  wss.isUsernameAvailable = (username) => {
    let map1 = new Map(
      [...ChatClientUsers]
        .filter(([k, v]) => v == username)
    );
    if (map1.size > 0) return false;
    else return true;
  }

}
