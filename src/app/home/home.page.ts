
import { AlertController } from '@ionic/angular';

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre = new FormControl('');
  

  constructor() {
  }

}
function contactos(nombre: string, numero: string)
{
  var cont = 
}
