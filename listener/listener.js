const net = require('net');
const fs = require('fs');

class ListenerAgent {
    constructor(port, hostname) {
        this._server = net.createServer((conncetion) => {
          console.log('Client connected');

          conncetion.on('data', (chunk) => {
            console.log('on data started');
            const data = chunk.toString();
            this.handle(data);
            console.log('on data ended');
          });
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

    _writeFile(data) {
      fs.writeFileSync(`../${this._fileName}`, data, { flag: 'a+' });
    }

    _resetFile() {
      fs.writeFileSync(`../${this._fileName}`, '');
    }

    handle(data) {
      if (data.startsWith('start')) {
        const tokens = data.split(' ');
        this._fileName = tokens[1];
        this._resetFile();
      } else {
        this._writeFile(data);
      }
    }
}

module.exports = ListenerAgent;
