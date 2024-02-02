import { Injectable } from '@angular/core';
import {HTTP} from "@awesome-cordova-plugins/http/ngx";
import {Network} from "@awesome-cordova-plugins/network/ngx";
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HTTP, private network: Network) {

  }
  conexion() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        if (this.network.onConnect()) {
          if (this.network.type == 'none') {
            console.log('No esta conectado a internet');
            console.log(this.network.type)
          } else {
            console.log('esta conectado a internet');
            console.log(this.network.type)
          }
          resolve(this.network.type);
        } else {
          reject();
        }
      }, 500);
    }).catch((error) => {
      console.log('ERROR CONEXION')
    })
  }

}
