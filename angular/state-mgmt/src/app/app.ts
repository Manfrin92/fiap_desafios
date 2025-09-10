import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Reader } from './reader/reader';
import { Writer } from './writer/writer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Reader, Writer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('state-mgmt');
}
