import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  f = new FormGroup({
    answer: new FormControl('', Validators.required)

  });
  constructor(public quiz: QuizService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    if (this.quiz.current.questions[this.quiz.progress.questionId].correctAnswer === this.f.value.answer) {
      this.quiz.progress.score++;

    }
    this.quiz.progress.questionId++;
    this.quiz.syscProhress();
    if (this.quiz.progress.questionId === this.quiz.current.questions.length) {
      this.router.navigateByUrl('/score');
      return;
    }
    this.f.reset();
  }

}
