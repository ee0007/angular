import { TestBed } from '@angular/core/testing';

import { QuizHttpService } from './quiz-http.service';

describe('QuizHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizHttpService = TestBed.get(QuizHttpService);
    expect(service).toBeTruthy();
  });
});
