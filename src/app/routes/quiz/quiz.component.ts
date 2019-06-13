import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz.service';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(public quiz:QuizService, private router:Router) { }

  ngOnInit() {
  }

  startQuiz(q:Quiz){
    this.quiz.current=q;
    this.quiz.syscCurrent();
    this.quiz.initProgress();
    this.router.navigate(['/',q.name,'question']);
  }
}
