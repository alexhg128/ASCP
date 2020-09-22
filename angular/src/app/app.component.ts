import { Component } from '@angular/core';
const electron = (<any>window).require('electron');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ascp';

  constructor() {
    electron.ipcRenderer.on('msg', (event, arg) => {
      console.log(arg) // prints "pong"
      alert(arg);
    });
  }

  send() {
    console.log("sending");
    electron.ipcRenderer.send('msg', "Que onda");
  }

}
