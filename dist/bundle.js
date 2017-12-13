/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notifications = function () {
    function Notifications() {
        _classCallCheck(this, Notifications);

        this.messages = [];
        this.notifications = document.querySelector('#notifications');
        this.notifications.innerHTML = '';
    }

    _createClass(Notifications, [{
        key: 'add',
        value: function add(message) {
            this.messages.push(message);

            var node = document.createTextNode(this.messages.length + ' - ' + message);

            var div = document.createElement("div");

            div.appendChild(node);
            this.notifications.appendChild(div);
            console.log('messages', this.messages);
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.notifications.clear();
        }
    }]);

    return Notifications;
}();

var notifications = exports.notifications = new Notifications();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.screenSelector = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _notifications = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = __webpack_require__(4);

var ScreenSelector = function (_EventEmitter) {
    _inherits(ScreenSelector, _EventEmitter);

    function ScreenSelector() {
        _classCallCheck(this, ScreenSelector);

        var _this = _possibleConstructorReturn(this, (ScreenSelector.__proto__ || Object.getPrototypeOf(ScreenSelector)).call(this));

        _this.resetVisibility();
        _this.on('loggedOut', _this.onLoggedOut);
        _this.on('selectRoom', _this.onSelectRoom);
        _this.on('inRoom', _this.onInRoom);
        _this.on('disconnected', _this.onDisconnected);
        _this.on('connecting', _this.onConnecting);
        return _this;
    }

    _createClass(ScreenSelector, [{
        key: 'onLoggedOut',
        value: function onLoggedOut() {
            this.resetVisibility();
            document.querySelector('#loggedOut').style.display = 'block';
        }
    }, {
        key: 'onSelectRoom',
        value: function onSelectRoom() {
            this.resetVisibility();
            document.querySelector('#selectRoom').style.display = 'block';
        }
    }, {
        key: 'onInRoom',
        value: function onInRoom() {
            this.resetVisibility();
            document.querySelector('#inRoom').style.display = 'block';
        }
    }, {
        key: 'onDisconnected',
        value: function onDisconnected() {
            this.resetVisibility();
            document.querySelector('#disconnected').style.display = 'block';
        }
    }, {
        key: 'onConnecting',
        value: function onConnecting() {
            this.resetVisibility();
            document.querySelector('#connecting').style.display = 'block';
        }
    }, {
        key: 'resetVisibility',
        value: function resetVisibility() {
            this.screens = document.querySelectorAll('.screen');
            for (var i = 0; i < this.screens.length; i++) {
                this.screens[i].style.display = 'none';
            }
        }
    }]);

    return ScreenSelector;
}(EventEmitter);

var screenSelector = exports.screenSelector = new ScreenSelector();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.messageHandler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _notifications = __webpack_require__(0);

var _screenSelector = __webpack_require__(1);

var _socketClient = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventEmitter = __webpack_require__(4);

var WebSocketClient = _socketClient.wsc;

var MessageHandler = function (_EventEmitter) {
    _inherits(MessageHandler, _EventEmitter);

    function MessageHandler() {
        _classCallCheck(this, MessageHandler);

        var _this = _possibleConstructorReturn(this, (MessageHandler.__proto__ || Object.getPrototypeOf(MessageHandler)).call(this));

        _this.on('SET_HANDLE_SUCCESS', function (data) {
            this.setHandleSuccess(data);
        });
        _this.on('SET_HANDLE_FAIL', function (data) {
            this.setHandleFail(data);
        });
        _this.on('ROOMS', function (data) {
            this.setRooms(data);
        });
        _this.on('ON_SAY', function (data) {
            this.setOnSay(data);
        });
        _this.on('SET_DISCONNECT_SUCCESS', function (data) {
            this.setDisconnectSuccess(data);
        });
        _this.on('JOIN_SUCCESS', function (data) {
            this.setJoinSuccess(data);
        });
        return _this;
    }

    _createClass(MessageHandler, [{
        key: "setHandleSuccess",
        value: function setHandleSuccess(data) {

            _notifications.notifications.add("setHandleSuccess");
            this.username = data.data;
            if (data.success) {
                WebSocketClient.loadRooms();
            }
        }
    }, {
        key: "setHandleFail",
        value: function setHandleFail(data) {
            console.log(data);
            _notifications.notifications.add("Connection Error: " + data.data);
        }
    }, {
        key: "setRooms",
        value: function setRooms(data) {

            // show the correct screen
            _screenSelector.screenSelector.emit('selectRoom');

            var rooms = [];
            if (data.data) {
                rooms = data.data;
            }

            var chat_rooms = document.querySelector('#chat_rooms');
            chat_rooms.innerHTML = '';

            rooms.forEach(function (element, index) {

                var li = document.createElement('li');

                var a = document.createElement('a');
                a.id = index;
                a.className = 'btnRoom';
                a.href = "#";
                a.onclick = function () {
                    WebSocketClient.join(index);
                };

                var node = document.createTextNode(element);
                a.appendChild(node);
                li.appendChild(a);
                chat_rooms.appendChild(li);
            });
        }
    }, {
        key: "setOnSay",
        value: function setOnSay(data) {
            var chat = document.querySelector('#chat_area');
            var div = document.createElement('div');

            div.innerHTML = data.data;
            chat.appendChild(div);
        }
    }, {
        key: "setDisconnectSuccess",
        value: function setDisconnectSuccess(data) {
            if (data.success) {
                WebSocketClient.close();
            }
        }
    }, {
        key: "setJoinSuccess",
        value: function setJoinSuccess(data) {
            // show the correct screen
            _screenSelector.screenSelector.emit('inRoom');
            this.room = data.data;
            document.querySelector('#chatText').value = '';
            document.querySelector('#chat_area').innerHTML = '';
            document.querySelector('#roomName').innerHTML = '';
            document.querySelector('#roomName').innerHTML = "Hi " + this.username + ". You are in " + this.room + ".";
        }
    }]);

    return MessageHandler;
}(EventEmitter);

var messageHandler = exports.messageHandler = new MessageHandler();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wsc = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _notifications = __webpack_require__(0);

var _messageHandler = __webpack_require__(2);

var _screenSelector = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocketClient = function () {
    function SocketClient(wsUri) {
        _classCallCheck(this, SocketClient);

        this.Uri = wsUri;
    }

    _createClass(SocketClient, [{
        key: 'connect',
        value: function connect() {
            var _this = this;

            //Open a WebSocket connection. 
            this.ws = new WebSocket(this.Uri);

            this.ws.onerror = function () {
                return _notifications.notifications.add('WebSocket error');
            };

            this.ws.onopen = function () {

                _notifications.notifications.add('WebSocket connection established');
                var handle = document.querySelector('#handle').value;

                var msg = {
                    type: "SET_HANDLE",
                    handle: handle
                };
                _this.ws.send(JSON.stringify(msg));
            };

            this.ws.onclose = function () {
                _notifications.notifications.add('WebSocket connection closed');
                _screenSelector.screenSelector.emit('loggedOut');
            };

            this.ws.onmessage = function (ev) {
                var data = JSON.parse(ev.data);
                _notifications.notifications.add('WebSocket message ' + data.type + " | " + data.data);
                _messageHandler.messageHandler.emit(data.type, data);
            };
        }
    }, {
        key: 'get',
        value: function get() {
            return this.ws;
        }
    }, {
        key: 'disconnect',
        value: function disconnect() {
            var msg = {
                type: "DISCONNECT",
                handle: handle
            };
            this.ws.send(JSON.stringify(msg));
        }
    }, {
        key: 'join',
        value: function join(index) {
            this.ws.send(JSON.stringify({ 'type': 'JOIN', 'roomId': index }));
        }
    }, {
        key: 'close',
        value: function close() {
            this.ws.close();
        }
    }, {
        key: 'say',
        value: function say(message) {

            var msg = {
                type: "SAY",
                message: message
            };
            this.ws.send(JSON.stringify(msg));
        }
    }, {
        key: 'exitRoom',
        value: function exitRoom() {
            this.ws.send(JSON.stringify({ 'type': 'EXIT_ROOM' }));
            _screenSelector.screenSelector.emit('selectRoom');
        }
    }, {
        key: 'loadRooms',
        value: function loadRooms() {
            this.ws.send(JSON.stringify({ 'type': 'ROOMS' }));
        }
    }]);

    return SocketClient;
}();

var HOST = location.origin.replace(/^http/, 'ws');
console.log(HOST);
var wsc = exports.wsc = new SocketClient(HOST);

/***/ },
/* 4 */
/***/ function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _screenSelector = __webpack_require__(1);

var _messageHandler = __webpack_require__(2);

var _notifications = __webpack_require__(0);

var _socketClient = __webpack_require__(3);

var WebSocketClient = _socketClient.wsc;

//default screen
_screenSelector.screenSelector.emit('loggedOut');

// dom elements 
var btnConnect = document.querySelector('#btnConnect');
var btnSay = document.querySelector('#btnSay');
var btnExitRoom = document.querySelector('#btnExitRoom');
var btnDisconnect = document.querySelector('#btnDisconnect');

// connect to websocket and setHandle
btnConnect.onclick = function () {
    console.log(WebSocketClient);

    var handle = document.querySelector('#handle').value;
    document.querySelector('#name').innerHTML = handle;
    WebSocketClient.connect();
};

btnDisconnect.onclick = function () {
    WebSocketClient.disconnect();
};

btnExitRoom.onclick = function () {
    WebSocketClient.exitRoom();
};

btnSay.onclick = function () {
    var message = document.querySelector('#chatText').value;

    if (message > '') {
        WebSocketClient.say(message);
        document.querySelector('#chatText').value = '';
        document.querySelector('#chatText').focus();
    }
};

document.querySelector('#chatText').addEventListener('keypress', function (event) {
    var keyName = event.key;
    if (keyName == 'Enter') {
        btnSay.click();
    }
    return;
});

/***/ }
/******/ ]);