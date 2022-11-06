import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  constructor(private alertController: AlertController) {}

  async ReiniciarTap() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Has alcanzado el número maximo de clicks',
      message: 'Se reiniciara el contador',
      buttons: ['OK'],
    });

    //console.log("Reiniciado");
    // this.counter=0;
    await alert.present();
  }

  //Empieza el contador
  counter: number = 0;
  // databinding
  TapCounter(){
    console.log("Clicks");
    this.counter++;
  }
  
  LimpiarData(counter){
    if(this.counter>10){
      this.ReiniciarTap();
      this.counter=0;
      
    }
  }
  // ReiniciarTap(){
  //   console.log("Reiniciado");
  //   this.counter=0;
  // }
}
