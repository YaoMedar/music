import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicComponent } from './music/music.component';
import { SearchComponent } from './search/search.component';
import { SchoolComponent } from './school/school.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'music/:musicId', component: MusicComponent},
  {path: 'music-list', component: MusicListComponent},
  {path: 'search', component: SearchComponent},
  {path: 'school', component: SchoolComponent},
   {path: 'school', component: SchoolComponent},
   {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'search', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
