import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageJokesComponent } from './components/page-jokes/page-jokes.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'joke',
    pathMatch: 'full'
  },
  {
    path: 'joke',
    component: PageJokesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
