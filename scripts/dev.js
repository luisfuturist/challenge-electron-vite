const vite = require("vite");

async function dev() {
    const server = await vite.createServer();
    await server.listen();
    server.printUrls();
}

dev();