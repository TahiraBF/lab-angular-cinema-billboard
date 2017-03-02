import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CinemaViewing} from './services/cinema.service';
import { RouterModule, Routes } from "@angular/router";



import { AppComponent } from './app.component';
import { ShowMoviesComponent } from './show-movies/show-movies.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies',  component: ShowMoviesComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ShowMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CinemaViewing],
  bootstrap: [AppComponent]
})
export class AppModule { }
