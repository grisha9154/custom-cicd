const net = require('net');

class RequestAgent {
    constructor(hostname, port) {
        this._client = new net.Socket();
        this._client.connect(port, hostname, () => {
            console.log('Client Connected')
        });
    }

    send(text) {
        this._client.write(text);
    }
}

module.exports = RequestAgent;