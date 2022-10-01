import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  constructor() { }
  total:number=0;
  maxBoletos:number=7;
  error:string;
  comprador;
  nombre;
  boletos;
  tarjeta;






  procesar(){
    this.maxBoletos=7*this.comprador
    if(this.boletos<=this.maxBoletos){
      this.error=""
      if(this.boletos<=2){
        this.total=this.boletos*12;
        if(this.tarjeta=="si"){
          this.total=this.total-(this.total*0.10);
        }
      }
      else if(this.boletos>=3 && this.boletos<=5){
        this.total=(this.boletos*12)-((this.boletos*12)*0.10);
        if(this.tarjeta=="si"){
          this.total=this.total-(this.total*0.10);
        }
      }
      else if(this.boletos>=6){
        this.total=(this.boletos*12)-((this.boletos*12)*0.15);
        if(this.tarjeta=="si"){
          this.total=this.total-(this.total*0.10);
        }
      }
    }
    else{
      this.error="Máximo 7 boletos por comprador";
      this.total=0;
      this.boletos=0;
    }
    









  }
}
