import { Component, OnInit } from '@angular/core';
import { InterviewService } from 'src/app/services/interview/interview.service';

@Component({
  selector: 'br-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.sass']
})
export class InterviewComponent implements OnInit {

  currentQuestion: string = ""

  isInterviewStarted: boolean = false

  constructor(private interviewService: InterviewService) { }


  ngOnInit(): void {
  }

  startInterview(): void {
    this.isInterviewStarted = true
    this.currentQuestion = this.interviewService.questions[this.interviewService.currentQuestionIndex]
  }

  sendAnswer(): void {
    this.interviewService.nextQuestion()
    this.currentQuestion = this.interviewService.questions[this.interviewService.currentQuestionIndex]
  }

}
