import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { CreateComponent } from './routes/create/create.component';
import { LegalComponent } from './routes/legal/legal.component';
import { SetupComponent } from './routes/setup/setup.component';
import { AddQuestionComponent } from './routes/add-question/add-question.component';
import { SavedComponent } from './routes/saved/saved.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    LegalComponent,
    SetupComponent,
    AddQuestionComponent,
    SavedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
