import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'IronMan';
  public realName: string = 'Tony Stark';
  public age: number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void{
    this.name = 'SpiderMan';
    this.realName = 'Peter Parker';
  }

  public changeAge(): void{
    this.age = 17;
  }

  public defaultValues(): void{
    this.name = 'IronMan';
    this.realName = 'Tony Stark';
    this.age = 45;

    //! Cuidado con este tipo de codigo 
    //! Puede tener resultados inesperados
    /*
    document.querySelectorAll('h1')!.forEach(element =>{
      element.innerHTML = '<h1>Desde Angular</h1>'
    });
    */

  }

}
