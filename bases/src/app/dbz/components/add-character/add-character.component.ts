import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  //envía al componente padre
 @Output()
 public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character: Character = {
      name:'',
      power: 0
    };
    //metodo para enviar el personaje
    emitCharacter():void{
      //Si el nombre esta vacío no hace nada
      if (this.character.name.length === 0) return;
      //envía al componente padre
      this.onNewCharacter.emit(this.character);
      //Reinicia los valores
      this.character={ name: '', power:0};

    }
}