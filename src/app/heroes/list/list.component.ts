import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  public herosName: string[] = [
    'Spiderman',
    'Ironman',
    'She Hulk',
    'Thor'
  ]
  public deleteHero? : string;

  removeLastHero():void{
    this.deleteHero =  this.herosName.pop();
  }

}
