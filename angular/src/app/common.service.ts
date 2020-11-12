import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private contact = '';
  private userToken = '';
  private objectId = '';

  constructor(private http: HttpClient) { }

  public getContact() {
    return this.contact;
  }

  public setContact(contact: string) {
    this.contact = contact;
  }

  public login(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post('https://api.backendless.com/9176FE65-2FB5-2B00-FFED-BEB6A480BC00/0397420A-AA65-4BA2-9A1F-D4C9583099C8/users/login', {
        'login': email,
        'password': password
      })
      .toPromise()
      .then((data: any) => {
        this.userToken = data['user-token'];
        this.objectId = data['objectId'];
        resolve();
      }).catch(e => {
        reject();
      })
    })
  }

  public updateIp(ip: string) {
    return this.http.put(`https://api.backendless.com/9176FE65-2FB5-2B00-FFED-BEB6A480BC00/0397420A-AA65-4BA2-9A1F-D4C9583099C8/data/Users/${ this.objectId }`, {
      "last_ip": ip
    }, {
      headers: {
        "user-token": this.userToken
      }
    })
    .toPromise()
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    })
  }

  public lookup(email: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.get(`https://api.backendless.com/9176FE65-2FB5-2B00-FFED-BEB6A480BC00/0397420A-AA65-4BA2-9A1F-D4C9583099C8/data/Users?where=email%3D%27${ email }%27`, {
        headers: {
          'user-token': this.userToken
        }
      })
      .toPromise()
      .then((data: any[]) => {
        if(data.length > 0) {
          resolve(data[0]['last_ip']);
        } else {
          reject();
        }
      })
      .catch(e => {
        reject();
      })
    })
    
  }

}
