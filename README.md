# PingChat 💬

A basic real-time web chat app built to understand how **WebSockets** work under the hood — how a persistent connection is established between the client and server, and how messages are sent and received in real time without any page refresh.

## Why I Built This

I built this project purely for learning purposes. I wanted to understand:

- How WebSocket connections are established between a browser and a Node.js server
- How messages flow in real time from one client to all connected clients
- How it differs from traditional HTTP request-response communication

## How It Works

1. When a user opens the app, the browser creates a **WebSocket connection** to the server
2. When a message is typed and sent, it travels over that persistent connection to the server
3. The server **broadcasts** it to all connected clients instantly
4. Every client receives and displays the message in real time — no polling, no refresh

## Tech Stack

- **Node.js** — HTTP + WebSocket server
- **ws** — WebSocket library for Node.js
- **HTML + CSS** — Frontend UI
- **Vanilla JavaScript** — Client-side WebSocket handling

## Getting Started

Anyone can run this project locally by following these steps:

### 1. Clone the repository

```bash
git clone https://github.com/Ayushsoni9125/PingChat.git
```

### 2. Navigate into the project folder

```bash
cd PingChat
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node server.js
```

### 5. Open in browser

Go to [http://localhost:9000](http://localhost:9000) in your browser.  
Open multiple tabs to simulate multiple users chatting in real time!
