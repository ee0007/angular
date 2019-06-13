import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  f=new FormGroup({
    answer:new FormControl('',Validators.required)

  });
  constructor(public quiz:QuizService) { }

  ngOnInit() {
  }

}
