import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Classes } from './pages/classes/classes';
import { Dungeons } from './pages/dungeons/dungeons';
import { Recommender } from './pages/recommender/recommender';

const routes: Routes = [
  {path :'', component: Home},
  {path: 'classes', component: Classes},
  {path: 'dungeons', component: Dungeons},
  {path: 'recommender', component: Recommender}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
