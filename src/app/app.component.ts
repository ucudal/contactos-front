import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public contador: number = 0;
  title = 'Hola titulo Angular';

  sumar(cant:number) {
    this.contador+= cant;
  }

  reset(){
    this.contador = 0;
  }
}
