import { Component } from '@angular/core';
import { NoteService } from '../../services/note';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NoteAdd } from '../../components/note-add/note-add';
import { NoteShortenerPipe } from '../../pipes/note-shortener-pipe';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterLink, NoteAdd, NoteShortenerPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  constructor(private noteService: NoteService) {}

  protected title = 'Helloworld';
  protected isMouseOver = false;

  protected changeTitle(event: MouseEvent): void {
    this.title = 'Mouse click coordinates were: ' + event.clientX + ', ' + event.clientY;
  }



  
  showAlert(): void {
    alert('H1 title clicked!');
  }



  protected get notes() {
    return this.noteService.getNotes();
  }
}
