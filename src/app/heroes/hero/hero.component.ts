import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  standalone: false,

})

export class HeroComponent {

    public name: string = "ironMan";
    public ege: number = 45;

    get capitalizarNombre():string{
      return this.name.toUpperCase();
    }

    getHereoDescripcion(): string{
      return `${this.name } - ${this.ege}`
    }

    changeHero() : void{
      this.name = 'Spiderman';
    }

    changeAge(): void{
      this.ege = 20;

    }
    resetForm() {
      this.name = "ironMan";
      this.ege = 45;
    }
}

