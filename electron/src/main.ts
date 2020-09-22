const { app, BrowserWindow } = require('electron')
import * as Tasks from "./process/tasks";

var win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('./ui/index.html')

  // Open the DevTools.
  win.webContents.openDevTools();

  Tasks.default.init();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const { ipcMain } = require('electron')
ipcMain.on('msg', (event: any, arg: any) => {
  Tasks.default.send(arg);
  console.log(arg);
})

Tasks.default.message.subscribe((msg) => {
  console.log(msg);
  win.webContents.send('msg', msg);
});