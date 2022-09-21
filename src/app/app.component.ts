import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo1Angular';
  duplicarValor(x:number):number{
    return x*2;
  }
  pelicula={
    titular:'superman',
    fechalanzamieto:new Date(),
    precio:235.31,
  }
}
