import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //Recibe la lista del componente padre
@Input()
  public characterList: Character[] = [{
    name:'Trunk',
    power: 10
  }]

//envía al componente padre
@Output()
public onDelete: EventEmitter<number> = new EventEmitter();

// metodo para eliminar los personajes
onDeteteCharacter(index:number):void{

   this.onDelete.emit(index);

  }

}
