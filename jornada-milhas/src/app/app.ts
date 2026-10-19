import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  imports: [ MatButtonModule ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('jornada-milhas');
}
