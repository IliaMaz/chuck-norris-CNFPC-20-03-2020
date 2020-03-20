import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageJokesComponent } from './components/page-jokes/page-jokes.component';
import { PageLangagueComponent } from './components/page-langague/page-langague.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'joke',
    pathMatch: 'full'
  },
  {
    path: 'joke',
    component: PageJokesComponent
  },
  {
    path: 'language',
    component: PageLangagueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
