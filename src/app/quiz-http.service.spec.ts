import { TestBed } from '@angular/core/testing';

import { QuizHttpService } from './quiz-http.service';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';

describe('QuizHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],

  }));

  it('should be created', () => {
    const service: QuizHttpService = TestBed.get(QuizHttpService);
    expect(service).toBeTruthy();
  });
});
