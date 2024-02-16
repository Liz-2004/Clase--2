import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  contador = 0;

  incremento(){
    this.contador++;
  }


  decremento(){
    this.contador--;
  }


}
