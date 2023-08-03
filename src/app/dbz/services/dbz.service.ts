import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    constructor() { }

    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 500
        }, {
        id: uuid(),
        name: 'Goku',
        power: 9300
        }, {
        id: uuid(),
        name: 'Vegeta',
        power: 7500
        },
    ];

    public addCharacter(character: Character){
        
        //! Funciona pero es mejor con notacion ...
        /*const newCharacter: Character = {
            id: uuid(),
            name: character.name,
            power: character.power
        };*/

        const newCharacter: Character = {id: uuid(), ...character}

        this.characters.push(newCharacter);
    }

    /*
    public onDeleteCharacter(id: number): void{
        this.characters.splice(id, 1);
    }
    */

    public deleteCharacterById(id: string): void{
        this.characters = this.characters.filter(
                                character => character.id != id
                            );
    }
    
}