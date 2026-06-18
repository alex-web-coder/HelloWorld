import { Component, signal } from '@angular/core';
import { Note } from '../../models/note.model';
import { NoteService } from '../../services/note';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-note-add',
  imports: [FormsModule, CommonModule],
  templateUrl: './note-add.html',
  styleUrl: './note-add.scss',
})
export class NoteAdd {

  protected submitted : boolean = false;

  constructor(private noteService: NoteService) {}

  protected newNote = signal<Partial<Note>>({
    title: '',
    content: ''
  });

  protected addNote(form: any): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }
    
    const newNoteValue = this.newNote();
    if (!newNoteValue.title || !newNoteValue.content) {
      alert('Please enter both title and content for the note.');
    } else {
      this.noteService.addNote(newNoteValue.title, newNoteValue.content);
      this.newNote.set({ title: '', content: '' });
    }

    form.resetForm();
    this.submitted = false;
  }
}
