import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/** Root component for the myFlix Angular client */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myFlix-Angular-client';
}
