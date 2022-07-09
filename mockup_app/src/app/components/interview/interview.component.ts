import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from 'src/app/classes/Question';
import { InterviewService } from 'src/app/services/interview/interview.service';

@Component({
  selector: 'br-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.sass']
})
export class InterviewComponent implements OnInit {
  currentQuestion: Question | null = null
  currentQuestionIndex: number = 0
  questions: Question[] | null = null

  isInterviewStarted: boolean = false

  constructor(private interviewService: InterviewService) { }

  ngOnInit(): void {
  }

  startInterview(): void {
    this.isInterviewStarted = true
    this.interviewService.loadQuestions().subscribe((response) => {
      this.questions = response
      this.currentQuestion = this.questions[0]
    })
  }

  sendAnswer(): void {
    this.nextQuestion()

    if (this.questions != null){
      this.currentQuestion = this.questions[this.currentQuestionIndex]
    }
  }

  nextQuestion(): void {
    this.currentQuestionIndex += 1
  }

}
