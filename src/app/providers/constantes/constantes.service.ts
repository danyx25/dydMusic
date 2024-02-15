import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConstantesService {

  name: string='';
  password:string='';
  message:string='Por favor, completa usuario y contraseña'



  constructor() {
  }
}
