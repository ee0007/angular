import { Injectable } from '@angular/core';
import { Quiz, Question } from './quiz';



@Injectable({
  providedIn: 'root'
})
export class QuizService {


  current: Quiz;
  constructor() {
    const str = localStorage.getItem('current');
    if (!str) {
      return;
    }
    const q = JSON.parse(str);
    q.__proto__ = Quiz.prototype;
    this.current = q;

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
}
