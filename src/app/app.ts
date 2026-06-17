import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Helloworld';
  protected isMouseOver = false;

  protected changeTitle(event: MouseEvent): void {
    this.title = 'Mouse click coordinates were: ' + event.clientX + ', ' + event.clientY;
  }

  public getBookName(): string {
    return 'The Epic of Gilgamesh';
  }

  protected handleFooterClick(event: MouseEvent): void {
    alert('Footer clicked! Mouse click coordinates were: ' + event.clientX + ', ' + event.clientY);
  }

  showAlert(): void {
    alert('H1 title clicked!');
  }

}
