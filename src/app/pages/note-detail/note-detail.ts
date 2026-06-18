import { Component } from '@angular/core';
import { Note } from '../../models/note.model';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../../services/note';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-detail',
  imports: [CommonModule],
  templateUrl: './note-detail.html',
  styleUrl: './note-detail.scss',
})
export class NoteDetail {
  noteId!: number;
  note: any;

  constructor(private route: ActivatedRoute, private noteService: NoteService) {
    this.route.params.subscribe(params => {
      this.noteId = +params['id'];
      this.note = this.noteService.getNotes()().find((n: Note) => n.id === this.noteId);
    });
  }
}
