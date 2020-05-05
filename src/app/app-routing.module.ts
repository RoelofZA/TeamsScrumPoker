import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoteComponent } from './page/vote/vote.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { ManageComponent } from './page/manage/manage.component';
import { DuplicateTabComponent } from './page/duplicate-tab/duplicate-tab.component';


const routes: Routes = [
  { path: '', component: VoteComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'duplicate', component: DuplicateTabComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
