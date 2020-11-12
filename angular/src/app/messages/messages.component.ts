import { Component, NgZone, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
const electron = (<any>window).require('electron');

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  blockButton: boolean = false;
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

  
  constructor(private zone: NgZone, private common: CommonService) {
    
  }

  ngOnInit() {
    electron.ipcRenderer.on('message', (event, arg) => {
      console.log(arg);
      this.zone.run(() => {
        this.messageArray.push({
          user: this.address,
          message: arg['message'],
          valid: arg['valid']
        });
        
      });
    });

    electron.ipcRenderer.on('status', (event, arg) => {
      console.log(arg) 
      this.zone.run(() => {
        this.updateStatus(arg);
      });
    });

    electron.ipcRenderer.on('adress', (event, arg) => {
      console.log(arg)
      this.zone.run(() => {
        this.address = arg;
      });
    });

    electron.ipcRenderer.on('key', (event, arg) => {
      console.log(arg)
      this.zone.run(() => {
        this.key = arg;
        this.encrypted = !this.encrypted;
      });
    });
  }

  private updateStatus(status:Status) {
    // TODO:
    if(status == Status.LISTENING) {
      // No esta conectado
      // Desbloquear botones
      this.blockButton = false;
      this.encrypted = false;
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
      message: this.messageText,
      valid: true
    });
  }

  diconnect() {
    this.encrypted = false;
    console.log("Disconnecting");
    electron.ipcRenderer.send('disconnect');
  }

  invalidContact: boolean = false;

  connect(address: string) {
    this.invalidContact = false;
    const ipR = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/
    const emR = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const ipExp = new RegExp(ipR);
    const emExp = new RegExp(emR); 

    if(emExp.test(address)) {
      console.log("email")
      this.common.lookup(address)
      .then((ip) => {
        console.log(ip)
        electron.ipcRenderer.send('connect', ip);
      })
      .catch(e => {
        console.log("not found")
        this.invalidContact = true;
      })
    } else if(ipExp.test(address)) {
      console.log("IP");
      electron.ipcRenderer.send('connect', address);
    } else {
      console.log("neither email or ip")
      this.invalidContact = true;
    }
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

  integrity: boolean = true;

  toogleIntegrity() {
    electron.ipcRenderer.send('toogle-integrity');
    this.integrity = !this.integrity;
  }

}

interface Message {
  user: string;
  message:string;
  valid:boolean;
}

enum Status {
  CONNECTED_SERVER,
  CONNECTED_CLIENT,
  LISTENING
}