import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from './models/note.model';
import { NoteService } from './services/note';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'Helloworld';
  protected isMouseOver = false;

  constructor(private noteService: NoteService) {}

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
