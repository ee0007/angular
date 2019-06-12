import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  current: Quiz;
  constructor() { }

  createCurrent(name:string){
    this.current = new Quiz(name);

  }
}
