import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formularioLogin:FormGroup;

  constructor(public fb:FormBuilder, public alertController: AlertController) {

    this.formularioLogin=this.fb.group({
      'nombre':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required)
    })

  }
  async ingresar() {
    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        header: 'Incompleto',
        message: 'Por favor, completa usuario y contraseña',
        buttons: ['Aceptar'],
      });
      await alert.present();
      return;
    }
  }

}
