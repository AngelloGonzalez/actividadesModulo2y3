import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// Componente principal 
export class AppComponent {
  title = 'angularFundamentos';
  // aca va la logica general de su proyecto
}
