import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  
  public character: Character = {
    name: '',
    power: 0
  };

  public emitCharacter(): void{
    if(this.character.name.length > 0){
      this.onNewCharacter.emit(this.character);
    }else{
      return;
    }

    // TODO: Asi es mas eficiente
    this.character = {name: '', power: 0};

    //this.character.name = '';
    //this.character.power = 0;
  }

}
