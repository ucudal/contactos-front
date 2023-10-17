import { Component } from "@angular/core";

@Component({
    selector: "app-contador",
    templateUrl : "./contador.component.html"
}
)
export class ContadorComponent{
    public contador: number = 0;

  sumar(cant:number) {
    this.contador+= cant;
  }

  reset(){
    this.contador = 0;
  }
}