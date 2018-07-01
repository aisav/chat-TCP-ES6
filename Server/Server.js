'use strict';

// load the Node.js TCP library
const net = require('net');
const PORT = 3000;
const HOST = 'localhost';

class Server {
    constructor(port, address) {
        this.port = port || PORT;
        this.address = address || HOST;

        this.init();
    }

    init() {
        // let server = this;

        let onClientConnected = (sock) => {

            let clientName = `${sock.remoteAddress}:${sock.remotePort}`;
            console.log(`new client connected: ${clientName}`);

            sock.on('data', (data) => {
                console.log(`${clientName} Says: ${data}`);
                sock.write("answer from Server is the same data: "+data);
                //if we want to exit from client we will do
                // sock.write('exit');
            });

            sock.on('close', () => {
                console.log(`connection from ${clientName} closed`);
            });

            sock.on('error', (err) => {
                console.log(`Connection ${clientName} error: ${err.message}`);
            });
        }

        this.connection = net.createServer(onClientConnected);

        this.connection.listen(PORT, HOST, function() {
            console.log(`Server started at: ${HOST}:${PORT}`);
        });
    }
}
module.exports = Server;