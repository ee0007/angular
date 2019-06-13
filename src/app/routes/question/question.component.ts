import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  f=new FormGroup({});
  constructor(public quiz:QuizService) { }

  ngOnInit() {
  }

}
