import { Component} from '@angular/core';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  public getBookName(): string {
    return 'The Epic of Gilgamesh';
  }

  protected handleFooterClick(event: MouseEvent): void {
    alert('Footer clicked! Mouse click coordinates were: ' + event.clientX + ', ' + event.clientY);
  }
}
