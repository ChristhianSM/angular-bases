import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'IronMan', 'Hulk', 'She Hulk', 'Thor'];
  public lastHeroe: string = "";

  deleteLastHeroe(): void {
    if (this.heroNames.length > 0) {
      this.lastHeroe = this.heroNames.pop()!;
    }
  }
}
