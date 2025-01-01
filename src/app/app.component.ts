import { Component, ViewEncapsulation  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, FooterComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None, 
})
export class AppComponent {
  title = 'Gal Store';
  isMenuActive = false;

  toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }
}
