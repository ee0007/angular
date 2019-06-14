import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { CreateComponent } from './routes/create/create.component';
import { LegalComponent } from './routes/legal/legal.component';
import { SetupComponent } from './routes/setup/setup.component';
import { AddQuestionComponent } from './routes/add-question/add-question.component';
import { SavedComponent } from './routes/saved/saved.component';
import { QuizComponent } from './routes/quiz/quiz.component';
import { QuestionComponent } from './routes/question/question.component';
import { ScoreComponent } from './routes/score/score.component';
import { QuizService } from './quiz.service';
import { QuizHttpService } from './quiz-http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    LegalComponent,
    SetupComponent,
    AddQuestionComponent,
    SavedComponent,
    QuizComponent,
    QuestionComponent,
    ScoreComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [{ provide: QuizService, useClass: QuizHttpService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
