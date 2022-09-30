import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent{

  constructor() {
    this.totalA=[];
   }
   total:number=0;
   totalA:string[];  
   res:string;
   numero;

   tabla(){
    for (let i=1;i<=10;++i){
      this.totalA[i]=(`${this.numero} x ${i} = ${this.numero*i}`+"\n");
    }
   }
}
