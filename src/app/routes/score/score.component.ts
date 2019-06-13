import { Component, OnInit } from '@angular/core';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { QuizService } from 'src/app/quiz.service';
import { runInThisContext } from 'vm';
import { faPoo, faSmileWink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  icon=faSmile;
  constructor(public quiz:QuizService) { }

  ngOnInit() {
    if(this.quiz.progress.score === 0){
      this.icon=faPoo
    }
    if(this.quiz.progress.score === this.quiz.current.questions.length){
      this.icon=faSmileWink;
    }
  }

}
