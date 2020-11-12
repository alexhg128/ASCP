import { app, BrowserWindow, ipcMain } from 'electron';
import { Server } from './messaging/server_interface';
import { getIP } from './networkInfo';

var win: BrowserWindow;
var server: Server = new Server();

function createWindow () {

  win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('./ui/index.html')

  //win.webContents.openDevTools();

  server.init();
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

ipcMain.on('message', (event: any, arg: any) => {
  server.send(arg);
});

ipcMain.on('connect', (event: any, arg: any) => {
  console.log("Connecting");
  console.log(arg);
  server.connect(arg);
});

ipcMain.on('key', (event: any, arg: any) => {
  server.setKey(arg);
});

ipcMain.on('reset-key', (event: any, arg: any) => {
  server.resetKey();
});

ipcMain.on('disconnect', (event: any, arg: any) => {
  server.disconnect();
});

ipcMain.on('toogle-integrity', (event: any, arg: any) => {
  server.toogleIntegrity();
});

ipcMain.on('ip-check', (event: any, arg: any) => {
  win.webContents.send('ip-list', getIP());
});

server.on_message.subscribe((message) => {
  win.webContents.send('message', {
    message: message.message,
    valid: message.valid
  });
});

server.on_status.subscribe((status) => {
  console.log(status);
  console.log(server.address);
  win.webContents.send('status', status);
  if(!server.address && server.address != '') {
    win.webContents.send('adress', server.address);
  } else if(!server.address) {
    win.webContents.send('adress', '127.0.0.1');
  } else if((server.address as any).address) {
    win.webContents.send('adress', (server.address as any).address);
  } else {
    win.webContents.send('adress', server.address);
  }
});

server.on_key.subscribe((key) => {
  console.log("From main ", key);
  win.webContents.send('key', key);
})