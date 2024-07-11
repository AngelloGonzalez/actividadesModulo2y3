import { Component } from '@angular/core';
import { FooterComponent } from '../../comant/footer/footer.component';
import { NavegacionComponent } from '../../comant/navegacion/navegacion.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FooterComponent, NavegacionComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
