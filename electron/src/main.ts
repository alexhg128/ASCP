import { app, BrowserWindow, ipcMain } from 'electron';
import { Server } from './messaging/server_interface';

var win: BrowserWindow;
var server: Server = new Server();
server.setKey("ABCDEF");
// server.resetKey();
// server.disconnect();

function createWindow () {

  win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('./ui/index.html')

  win.webContents.openDevTools();

  server.init();
  server.connect('127.0.0.1');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  } else {
    server.quit();
  }
});

app.on('will-quit', () => {
  server.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});

ipcMain.on('msg', (event: any, arg: any) => {
  server.send(arg);
})

server.on_message.subscribe((message) => {
  win.webContents.send('msg', message);
});

server.on_status.subscribe((status) => {
  console.log(status);
  console.log(server.address);
});