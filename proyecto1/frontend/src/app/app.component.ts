import { Component } from '@angular/core';
import { RouterOutlet,} from '@angular/router';
import { FooterComponent } from './comant/footer/footer.component';
import { NavegacionComponent } from './comant/navegacion/navegacion.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavegacionComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
