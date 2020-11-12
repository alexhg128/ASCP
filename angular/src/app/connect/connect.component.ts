import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
const electron = (<any>window).require('electron');

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  ip: string = '127.0.0.1';

  validIP: string[] = [

  ]

  error: boolean = false;

  constructor(private zone: NgZone, private common: CommonService, private router: Router) { }

  ngOnInit(): void {

    electron.ipcRenderer.on('ip-list', (event, arg) => {
      console.log(arg);
      this.zone.run(() => {
        this.validIP = arg;
      });
    });

    electron.ipcRenderer.send('ip-check', {});

  }

  connect() {
    this.error = false;
    this.common.updateIp(this.ip)
    .then(() => {
      this.router.navigate(['messages']);
    })
    .catch(() => {
      this.error = true;
    })
  }

}
