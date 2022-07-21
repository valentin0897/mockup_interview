import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ErrorMessage } from 'src/app/classes/ErrorMessage';
import { infoMessage } from 'src/app/classes/InfoMessage';
import { Tag, PostTag } from 'src/app/classes/Tag';
import { TagService } from 'src/app/services/rest/tag/tag.service';

@Component({
  selector: 'br-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.sass']
})
export class CreateTagComponent implements OnInit {
  error: ErrorMessage = new ErrorMessage()
  info: infoMessage = new infoMessage()

  tags: Tag[] = []

  createTagForm: FormGroup;

  constructor(public tagService: TagService, fb: FormBuilder) {
    this.createTagForm = fb.group({
      tag: ''
    });
  }

  ngOnInit(): void {
  }

  getTags(){
    this.tagService.loadTags()
  }

  saveTag(tag: PostTag){
    this.error.deactivateError()
    this.info.deactivateInfo()

    if(this.createTagForm.valid){
      this.tagService.saveTag(tag)
      this.info.activateInfo("Tag has been saved")
    } else {
      this.error.activateError("Form is invalid")
    }
  }
}
