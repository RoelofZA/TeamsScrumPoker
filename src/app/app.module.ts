import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './page/vote/vote.component';
import { ManageComponent } from './page/manage/manage.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { DuplicateTabComponent } from './page/duplicate-tab/duplicate-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    ManageComponent,
    PageNotFoundComponent,
    DuplicateTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
