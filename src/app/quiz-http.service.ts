import { Injectable } from '@angular/core';
import { QuizService } from './quiz.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizHttpService extends QuizService {

  constructor(private http: HttpClient) {
    super();
    this.http.get(environment.serverUrl).subscribe({
      next: data => {
        console.log('sucess get');
        // tslint:disable-next-line: forin
        for (const name in data) {
          data[name].__proto__ = Quiz.prototype;
        }
        this.list = data;
        localStorage.setItem('list', JSON.stringify(this.list));
      },

    });
  }

  saveCurrent() {
    super.saveCurrent();
    this.http.post(environment.serverUrl, this.list).subscribe({
      next: () => console.log('sys successfull'),
      error: e => console.log('sysc fail'),

    });
  }

}
