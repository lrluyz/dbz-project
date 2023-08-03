import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
      name: 'Trunks',
      power: 10
    },
  ];

  @Output()
  //public onDeleteEmitter: EventEmitter<number> = new EventEmitter();
  public onDeleteEmitter = new EventEmitter<string>();

  public onDeleteCharacter(id?: string){
    if(id !== undefined){
      this.onDeleteEmitter.emit(id);
    }
  }
}
