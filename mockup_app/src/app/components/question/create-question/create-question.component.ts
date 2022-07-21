import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ErrorMessage } from 'src/app/classes/ErrorMessage';
import { infoMessage } from 'src/app/classes/InfoMessage';
import { PostQuestion, Question } from 'src/app/classes/Question'
import { Tag } from 'src/app/classes/Tag';
import { QuestionService } from 'src/app/services/rest/question/question.service';
import { TagService } from 'src/app/services/rest/tag/tag.service';

@Component({
  selector: 'br-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.sass']
})
export class CreateQuestionComponent implements OnInit {
  error: ErrorMessage = new ErrorMessage()
  info: infoMessage = new infoMessage()
  
  createQuestionForm: FormGroup;

  tags: Tag[] | null = null;

  constructor(public questionService: QuestionService, private tagService: TagService, fb: FormBuilder) {
    this.createQuestionForm = fb.group({
      question: '',
      tag_id: ''
    });
  }

  ngOnInit(): void {
    this.tagService.loadTags().subscribe((response) => {
      this.tags = response
    })
  }

  getQuestions(){
    this.questionService.getQuestions()
  }

  saveQuestion(body: PostQuestion){
    this.error.deactivateError()
    this.info.deactivateInfo()

    if (this.createQuestionForm.valid){
      this.questionService.saveQuestion(body)
      this.info.activateInfo("Question has been saved")
    } else {
      this.error.activateError("Form is invalid")
    }
  }

}
