import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from './models/note.model';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, CommonModule, FormsModule],
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

  protected readonly notes = signal<Note[]> ([
    {
      id: 1,
      title: 'First Note',
      content: 'This is the content of the first note.',
      createdAt: new Date('2024-01-01T10:00:00')
    },
    {
      id: 2,
      title: 'Second Note',
      content: 'This is the content of the second note.',
      createdAt: new Date('2024-02-01T11:00:00')
    }
  ]);

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: ''
  });

  protected addNote(): void {
    const newNoteValue = this.newNote();
    if (newNoteValue.title && newNoteValue.content) {
      const newNote: Note = {
        id: this.notes().length + 1,
        title: newNoteValue.title,
        content: newNoteValue.content,
        createdAt: new Date()
      };
      this.notes.update(notes => [...notes, newNote]);
      this.newNote.set({ title: '', content: '' });
    } else {
      alert('Please enter both title and content for the note.');
    }
  }

}
