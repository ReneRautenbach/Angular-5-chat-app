const express = require('express'); 
const http = require('http');
const url = require('url');
const websocket = require(__dirname + '/websocket') 
const path = require('path');

const DIST_DIR = path.join(__dirname,'dist');
const PORT = 3000;
const app = express();
    
app.use(express.static(DIST_DIR))   
 
app.get('/', function(req, res) { 
  res.sendFile (path.join(DIST_DIR, "index.html"));
});  

const server = http.createServer(app);
server.listen(PORT, function listening() {
  console.log('Listening on %d', server.address().port); 
  websocket(server); 
});

