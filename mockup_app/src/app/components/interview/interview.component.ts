import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from 'src/app/classes/Question';
import { Tag } from 'src/app/classes/Tag'
import { InterviewService } from 'src/app/services/interview/interview.service';
import { TagService } from 'src/app/services/rest/tag/tag.service';

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
  isInterviewEnded: boolean = false

  tags: Tag[] | null = null

  constructor(
    private interviewService: InterviewService,
    private tagService: TagService) { }

  ngOnInit(): void {
    this.tagService.loadTags().subscribe((response) => {
      this.tags = response
      console.log(this.tags)
    })
  }

  startInterview(): void {
    this.isInterviewStarted = true
    this.isInterviewEnded = false

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
    if (this.questions != null && this.currentQuestionIndex >= this.questions?.length){
      this.isInterviewEnded = true
    }
  }

  resetInterview(): void {
    this.currentQuestionIndex = 0
    
    if (this.questions != null){
    this.currentQuestion = this.questions[this.currentQuestionIndex]
    }
    this.isInterviewStarted = true
    this.isInterviewEnded = false
  }

  backToConfig(): void {
    this.resetInterview()
    this.isInterviewStarted = false
  }

}
