import { Injectable, signal } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
    private notes = signal<Note[]> ([
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
  ])

  getNotes() {
    return this.notes;
  }

  addNote(title: string, content: string) {
      const newNote: Note = {
        id: this.notes().length + 1,
        title: title,
        content: content,
        createdAt: new Date()
      };
      this.notes.update(notes => [...notes, newNote]);
  }

}
