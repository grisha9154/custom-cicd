const { watch, readFile } = require('fs/promises');
const RequestAgent = require('./sender');

const main = async() => {
    const path = process.argv[2];
    const hostName = process.argv[3];
    const port = process.argv[4];
    const url = process.argv[5];
    const watcher = watch(path);
    for await (const event of watcher){
        const type = event.eventType;
        const fileName = event.filename;
        switch(type) {
            case 'change':
                const file = await readFile(`${path}/${fileName}`);
                const fileData = file.toString();
                const reqAgent = new RequestAgent(hostName, port, url);
                reqAgent.send(fileData);
                break;
        }
    }
};

main();