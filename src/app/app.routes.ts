import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { NoteDetail } from './pages/note-detail/note-detail';
import { Movies } from './pages/movies/movies';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'movies', component: Movies },
    { path: 'note/:id', component: NoteDetail }
];
