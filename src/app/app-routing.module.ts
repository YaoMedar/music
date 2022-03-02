import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicComponent } from './music/music.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'library', component: LibraryComponent},
  {path: 'music/:musicId', component: MusicComponent},
  {path: 'music-list', component: MusicListComponent},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: 'search', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
