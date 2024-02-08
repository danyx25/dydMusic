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

  private passwordEye: any;


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


  // password 2
// Seleccionamos el elemento con el nombre que le pusimos con el #
  passwordTypeInput  =  'password';
// Variable para cambiar dinamicamente el tipo de Input que por defecto sera 'password'

// Esta función verifica si el tipo de campo es texto lo cambia a password y viceversa, además verificara el icono si es 'eye-off' lo cambiara a 'eye' y viceversa
  togglePasswordMode() {
    //cambiar tipo input
    this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
    //obtener el input
    const nativeEl = this.passwordEye.nativeElement.querySelector('input');
    //obtener el indice de la posición del texto actual en el input
    const inputSelection = nativeEl.selectionStart;
    //ejecuto el focus al input
    nativeEl.focus();
    //espero un milisegundo y actualizo la posición del indice del texto
    setTimeout(() => {
      nativeEl.setSelectionRange(inputSelection, inputSelection);
    }, 1);

  }


  // password 2
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

}
