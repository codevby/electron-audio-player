const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Usaremos preload para acceder a Node.js
      nodeIntegration: false, // Desactiva integración directa para mayor seguridad
      contextIsolation: true, // Asegura que el proceso de renderizado esté aislado
    },
  });

  // Cargar el archivo HTML local
  mainWindow.loadFile('index.html');
});