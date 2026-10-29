import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Banner } from './banner/banner';
import { FormBuscaPassagens } from './form-busca-passagens/form-busca-passagens';

@Component({
  imports: [
    Header,
    Banner,
    FormBuscaPassagens
],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('jornada-milhas');
}
