import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/classes/Question'
import { QuestionService } from 'src/app/services/rest/question.service';

@Component({
  selector: 'br-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.sass']
})
export class CreateQuestionComponent implements OnInit {
  questions: Question[] = []

  constructor(public questionService: QuestionService) { }

  ngOnInit(): void {
  }

  getQuestions(){
    this.questionService.getQuestions()
  }

}
