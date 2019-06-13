import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/quiz';
import { QuizService } from 'src/app/quiz.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

 q:Quiz;
 
  constructor(private quiz :QuizService) { }

  ngOnInit() {
  }

  save(){
    console.log("about to save the quiz");
  }
}
