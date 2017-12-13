const express = require('express'); 
const http = require('http');
const url = require('url');
const websocket = require(__dirname + '/websocket') 
const path = require('path');
import compression from 'compression';

const DIST_DIR = path.join(__dirname,'public');
const PORT = process.env.PORT || 5000
const app = express();
    
app.use(express.static(DIST_DIR)) 
app.use(compression());   
 
app.get('/', function(req, res) { 
  res.sendFile (path.join(DIST_DIR, "index.html"));
});  

const server = http.createServer(app);
server.listen(PORT, function listening() {
  console.log('Listening on %d', server.address().PORT); 
  websocket(server); 
}); 