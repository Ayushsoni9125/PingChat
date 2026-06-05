import http from 'http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { WebSocketServer } from 'ws';




const PORT = process.env.PORT || 9000;
const server = http.createServer(async (req, res) => {
  if (req.url === '/style.css') {
    const cssFile = await fs.readFile(path.resolve('./style.css'), 'utf-8');
    res.setHeader('Content-Type', 'text/css');
    res.end(cssFile);
  } else {
    const indexFile = await fs.readFile(path.resolve('./index.html'), 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    res.end(indexFile);
  }
});
const wsServer = new WebSocketServer({ server });

wsServer.on('connection', (websocket) => {
  console.log('web socket connection established');
  websocket.on('message', (data) => {
    console.log('Websocket message received:', data.toString());
    wsServer.clients.forEach((element) => {
      element.send(data.toString());
    });
    
  })
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});