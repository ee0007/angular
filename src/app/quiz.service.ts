import { Injectable } from '@angular/core';
import { Quiz, Question } from './quiz';

export interface QuizProgress {
  questionId: number;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  current: Quiz;
  list = {};
  progress: QuizProgress;

  constructor() {
    this.retrieveCurrent();
    this.retrieveList();
    this.retrieveProgress();

  }

  retrieveCurrent() {
    const str = localStorage.getItem('current');
    if (!str) {
      return;
    }
    const q = JSON.parse(str);
    q.__proto__ = Quiz.prototype;
    this.current = q;
  }

  retrieveList() {
    const str = localStorage.getItem('list');
    if (!str) {
      return;
    }
    const list = JSON.parse(str);
    this.list = list;
  }

  retrieveProgress() {
    const str = localStorage.getItem('progress');
    if (!str) {
      return;
    }

    this.progress = JSON.parse(str);
  }

  createCurrent(name: string) {
    this.current = new Quiz();
    this.current.name = name;
    this.syscCurrent();
  }

  addQuestion(question: Question) {
    this.current.questions.push(question);
    this.syscCurrent();
  }


  syscCurrent() {
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  saveCurrent() {

    const str = localStorage.getItem('list');
    if (str) {
      this.list = JSON.parse(str);
    }
    this.list[this.current.name] = this.current;
    localStorage.setItem('list', JSON.stringify(this.list));

  }

  hasQuiz() {
    return Object.keys(this.list).length > 0;
  }

  getListAsArray(): Quiz[] {
    return Object.values(this.list);
  }

  initProgress() {
    this.progress = {
      questionId: 0,
      score: 0
    };
    this.syscProhress();
  }

  syscProhress() {
    localStorage.setItem('progress', JSON.stringify(this.progress));
  }
}
