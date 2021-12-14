const net = require('net');

const defaultSize = 400;

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

    sendFile(fileData) {
        const count = fileData.length / defaultSize;
        for (let i = 0; i < count; i++) {
            const to = (i + 1) * defaultSize
            const from = i * defaultSize;
            const dataSlice = fileData.slice(from, to);
            this._client.write(dataSlice);
        }
    }
}

module.exports = RequestAgent;