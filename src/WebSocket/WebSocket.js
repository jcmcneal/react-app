const HOST = (process.env.NODE_ENV === 'production') ? 'localhost' : (process.env.WS_HOST || 'localhost');

const socket = new WebSocket(`ws://${HOST}:${process.env.WS_PORT}`, process.env.WS_PROTOCOL);

// Connection opened
socket.on = function on(event, cb) {
    socket.addEventListener(event, cb);
};

socket.on('open', () => {
    console.log('connected to server');
});

socket.onmessage = message => console.log('Message from server:', message);

socket.onerror = (error) => {
    console.error('WebSocket error:', error);
};

export default socket;
