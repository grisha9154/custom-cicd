const http = require('http');

class RequestAgent {
    constructor(hostname, port, path) {
        this._options = {
            hostname,
            path,
            port,
            method: 'POST',
            headers: {
                "Content-Type": "text/plain",
            }
        };
    }

    send(text) {
        const req = http.request(this._options);
        req.write(text);
        req.end();
    }
}

module.exports = RequestAgent;