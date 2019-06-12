import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { CreateComponent } from './routes/create/create.component';
import { SetupComponent } from './routes/setup/setup.component';
import { AddQuestionComponent } from './routes/add-question/add-question.component';
import { SavedComponent } from './routes/saved/saved.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'create', component: CreateComponent },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'saved', component: SavedComponent },
  { path: 'setup', component: SetupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
