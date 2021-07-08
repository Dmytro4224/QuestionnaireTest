import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QueriesListComponent } from './pages/queries-list/queries-list.component';
import { CreadQueryComponent } from './pages/cread-query/cread-query.component';
import { ManagementQueriesComponent } from './pages/management-queries/management-queries.component';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';
import { RouterModule } from '@angular/router';
import { MChoiceComponent } from './controls/cred-queries/mchoice/mchoice.component';
import { MChoiceItemComponent } from './controls/cred-queries/mchoice-item/mchoice-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QueriesListComponent,
    CreadQueryComponent,
    ManagementQueriesComponent,
    TopMenuComponent,
    MChoiceComponent,
    MChoiceItemComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: QueriesListComponent, pathMatch: 'full' },
      { path: 'create-question', component: CreadQueryComponent },
      { path: 'edit-question/:id', component: CreadQueryComponent },
      { path: 'manage', component: ManagementQueriesComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
