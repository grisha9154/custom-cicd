const ListenerAgent = require("./listener")

const main = async () => {
    const port = process.argv[2];
    const hostname = process.argv[3];
    new ListenerAgent(port, hostname);
}

main();
