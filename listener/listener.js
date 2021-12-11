const net = require('net');
const fs = require('fs');

class ListenerAgent {
    constructor(port, hostname) {
        this._server = net.createServer((conncetion) => {
          console.log('Client connected');

          conncetion.on('data', (chunk) => {
            console.log('on data started');
            const data = chunk.toString();
            console.log(data);
            this.handler(data);
            console.log('on data ended');
          });

          conncetion.pipe(conncetion);
        });


        this._server.listen(
          {
            port,
            host: hostname,
            readableAll: true,
            writableAll: true,
          },
          () => {
            console.log('Start Listen');
          },
        );
    }

    handler(data) {
      fs.writeFileSync('../index.js', data);
    }
}

module.exports = ListenerAgent;
