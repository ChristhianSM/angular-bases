import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "ironman";
  public age: number = 42;
  public showButtonName = true;
  public showButtonAge = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = "spiderman"
    this.showButtonName = false;
  }

  changeAge(): void {
    this.age = 16
    this.showButtonAge = false;
  }
}
