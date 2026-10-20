import { Component, signal } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Header } from './header/header';

@Component({
  imports: [Header],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('jornada-milhas');
}
