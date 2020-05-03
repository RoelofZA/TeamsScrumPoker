import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoteComponent } from './page/vote/vote.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: VoteComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
