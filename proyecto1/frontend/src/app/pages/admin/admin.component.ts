import { Component } from '@angular/core';
import { NavegacionComponent } from '../../comant/navegacion/navegacion.component';
import { FooterComponent } from '../../comant/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NavegacionComponent, FooterComponent, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}


// importar el services
// hacer la injec
