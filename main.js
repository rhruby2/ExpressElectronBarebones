/**
 * Electron entry point
 */

const { app, BrowserWindow } = require('electron');
//for a GPU related warning in terminal that prevents application refresh
app.commandLine.appendSwitch('force_high_performance_gpu');

const server = require('./server.js');
const port = 3000;
//to start express server
server(port);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  //win.loadFile('index.html')
  win.loadURL(`http://localhost:${port}/`);
  if(process.env.NODE_ENV = "development"){
      win.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  createWindow();
})