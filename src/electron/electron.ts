import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: BrowserWindow | null;

const createWindow = async () => {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"), // Opcional
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    const startUrl = process.env.ELECTRON_START_URL ||
        `file://${path.join(__dirname, "../build/index.html")}`;

    await mainWindow.loadURL(startUrl);

    mainWindow.on("closed", () => {
      mainWindow = null;
    });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
