const ListenerAgent = require("./listener")

const main = async () => {
    const port = process.argv[2];
    new ListenerAgent(port);
}

main();
