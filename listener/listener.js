const http = require('http');
const fs = require('fs');

class ListenerAgent {
    constructor(port) {
        this._server = http.createServer();
        this._server.on('request', (request, res) => {
            console.log('Request ready');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              data: 'Succes!'
            }));
            request.on('data', chunk => {
              const data = chunk.toString();
              this.handler(data);
            });
          });
        this._server.listen(port);
    }

    handler(data) {
      fs.writeFileSync('./index.js', data);
    }
}

module.exports = ListenerAgent;
