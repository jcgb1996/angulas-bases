import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({providedIn: 'root'})

export class DbzService {

  public characters:Character[] = [
    {
      name: 'Krillin',
      power: 1000,
      id: uuidv4(),
    },{
      name: 'Goku',
      power: 9500,
      id: uuidv4(),
    },{
      name: 'Vegeta',
      power: 7500,
      id: uuidv4(),
    }];

  addCharacter( Character: Character):void{
    const newCharacter: Character = { id: uuidv4(), ...Character}
    this.characters.push(newCharacter);

  }

  //onDeleteCharacter(index : number):void{
   // this.characters.splice(index,1);
  //}

  onDeleteCharacterById(id: string): void{
    this.characters = this.characters.filter(x=> x.id !== id);
  }

}
