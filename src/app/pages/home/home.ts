import { Component, signal } from '@angular/core';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterLink],
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

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: ''
  });

  protected addNote(): void {
    const newNoteValue = this.newNote();
    if (!newNoteValue.title || !newNoteValue.content) {
      alert('Please enter both title and content for the note.');
    } else {
      this.noteService.addNote(newNoteValue.title, newNoteValue.content);
      this.newNote.set({ title: '', content: '' });
    }
  }

  protected get notes() {
    return this.noteService.getNotes();
  }
}
