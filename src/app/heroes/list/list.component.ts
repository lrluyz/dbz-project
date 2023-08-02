import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = this.createHeros();
  public deletedHero?: string;

  public revomeLastHero(): void{
    this.deletedHero = this.heroNames.pop();
  }

  public createHeros(): string[]{
    return ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Widow'];
  }

  public resetHerosList(): void{
    this.heroNames = this.createHeros();
    this.deletedHero = undefined;
  }

}
