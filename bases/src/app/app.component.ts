import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bases';
  public titsle: string='hola mundo';
  public counter:  number =10;


  increaseby(value: number): void{
    this.counter ++;
  }
  
  decrementby(value: number): void{
    this.counter --;
  }
  reset(value: number): void{
    this.counter=10;
  }
}

