const vite = require('vite');
const electronBuilder = require('electron-builder');

const build = async () => {
    await vite.build();
    await electronBuilder.build({
        config: {
            appId: "com.luisfloat.systemi-app",
            files: [
                "dist/**/*",
                "electron.js"
            ],
            directories: {
                output: "./pkg/",
            },
            linux: {
                category: "Utility",
                target: [
                    "AppImage",
                ],
            },
        },
    });
}

build();