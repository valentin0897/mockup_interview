import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostQuestion, Question } from 'src/app/classes/Question'
import { QuestionService } from 'src/app/services/rest/question/question.service';

@Component({
  selector: 'br-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.sass']
})
export class CreateQuestionComponent implements OnInit {
  questions: Question[] = []

  createQuestionForm: FormGroup;

  constructor(public questionService: QuestionService, fb: FormBuilder) {
    this.createQuestionForm = fb.group({
      question: ''
    });
  }

  ngOnInit(): void {
  }

  getQuestions(){
    this.questionService.getQuestions()
  }

  saveQuestion(question: PostQuestion){
    this.questionService.saveQuestion(question)
  }

}
