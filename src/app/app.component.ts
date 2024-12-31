import { Component, ViewEncapsulation  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, FooterComponent],
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
