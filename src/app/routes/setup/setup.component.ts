import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/quiz';
import { QuizService } from 'src/app/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

 
  constructor(private quiz :QuizService, private router:Router) {
  }

  ngOnInit() {
  }

  save(){
    console.log("about to save the quiz");
    this.quiz.saveCurrent();
    this.router.navigateByUrl("/saved");
  }
}
