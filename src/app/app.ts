import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Helloworld';

  protected changeTitle(event: MouseEvent): void {
    this.title = 'Mouse click coordinates were: ' + event.clientX + ', ' + event.clientY;
  }
}
