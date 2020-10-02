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
  key:string;
  messageArray:Message[] = [
  ];
  encrypted:boolean = false;

  ipValidator(event: KeyboardEvent) {
    switch(event.key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        break;
      default:
        var value = ((event.target as any).value as string);
        (event.target as any).value = value.substring(0, value.length - 1);
    }
  }

  hexValidator(event: KeyboardEvent) {
    switch(event.key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case 'a':
      case 'b':
      case 'c':
      case 'd':
      case 'e':
      case 'f':
      case 'A':
      case 'B':
      case 'C':
      case 'D':
      case 'E':
      case 'F':
        break;
      default:
        var value = ((event.target as any).value as string);
        (event.target as any).value = value.substring(0, value.length - 1);
    }
  }

  
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
    if(!key) {
      return;
    }
    if(key.length < 16) {
      for(var i = 0; i < 16 - key.length; i++) {
        key = '0' + key;
      }
      console.log(key);
    }
    electron.ipcRenderer.send('key', key);
    this.encrypted = !this.encrypted;
  }

  resetKey() {
    console.log("Reset key");
    electron.ipcRenderer.send('reset-key');
    this.encrypted = !this.encrypted;
  }

  clear() {
    this.messageArray = [];
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