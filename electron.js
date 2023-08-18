const { app, BrowserWindow } = require("electron");
const path = require("path");

async function serve() {
    if(process.env.ENV_DEV) {
        const vite = require("vite");
		const server = await vite.createServer();
		await server.listen();

        return "http://localhost:5173";
    } else {
        const httpServer = require("http-server");
        httpServer.createServer({
			root: path.join(__dirname, "dist"),
		}).listen(3024);

		return "http://localhost:3024";
    }
}

async function createWindow() {
    const serverUrl = await serve();

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    win.loadURL(serverUrl);
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if(BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") {
        app.quit();
    }
});