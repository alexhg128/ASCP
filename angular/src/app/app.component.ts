import { Component, NgZone } from '@angular/core';
const electron = (<any>window).require('electron');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ascp';
  blockButton: Boolean = false;
  user:string;
  address:string;
  messageText:string;
  messageArray:Message[] = [];

  constructor(private zone: NgZone) {
    electron.ipcRenderer.on('message', (event, arg) => {
      console.log(arg);
      zone.run(() => {
        this.messageArray.push({
          user: this.address,
          message: arg
        });
        
      });
    });

    electron.ipcRenderer.on('status', (event, arg) => {
      console.log(arg) 
      zone.run(() => {
        this.updateStatus(arg);
      });
    });

    electron.ipcRenderer.on('adress', (event, arg) => {
      console.log(arg)
      zone.run(() => {
        this.address = arg;
      });
    });
  }

  private updateStatus(status:Status) {
    // TODO:
    if(status == Status.LISTENING) {
      // No esta conectado
      // Desbloquear botones
      this.blockButton = false;

    } else {
      // Conectado
      // Bloquar botones
      this.blockButton = true;
    }
  }

  send() {
    console.log("Sending");
    electron.ipcRenderer.send('message', this.messageText);
    this.messageArray.push({
      user:'Me',
      message: this.messageText
    });
  }

  diconnect() {
    console.log("Disconnecting");
    electron.ipcRenderer.send('disconnect');
  }

  connect(address: string) {
    console.log("Connecting");
    electron.ipcRenderer.send('connect', address);
  }

  setKey(key: string) {
    console.log("Setting key");
    electron.ipcRenderer.send('key', key);
  }

  resetKey() {
    console.log("Reset key");
    electron.ipcRenderer.send('reset-key');
  }

}

interface Message {
  user: string;
  message:string;
}

enum Status {
  CONNECTED_SERVER,
  CONNECTED_CLIENT,
  LISTENING
}