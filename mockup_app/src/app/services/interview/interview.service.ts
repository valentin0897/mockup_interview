import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  questions: string[] = ["Question_1", "Question_2", "Question_3"] 
  currentQuestionIndex: number = 0

  constructor() { }

  nextQuestion() {
    this.currentQuestionIndex += 1
  }
}
