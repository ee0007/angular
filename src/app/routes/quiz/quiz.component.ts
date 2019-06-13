import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(public quiz:QuizService) { }

  ngOnInit() {
  }

}