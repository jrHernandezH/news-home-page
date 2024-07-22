import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navegation: string[] = ['home', 'New', 'Popular', 'Trending', 'Categories'];

  visibleMenu = false

  seeMenu() {
    this.visibleMenu = !this.visibleMenu
  }


}
