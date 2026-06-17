import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [FormsModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  username = ''
  @Output() footerClicked = new EventEmitter<MouseEvent>();

  onFooterClick(event: MouseEvent): void {
    this.footerClicked.emit(event);
  }
}
