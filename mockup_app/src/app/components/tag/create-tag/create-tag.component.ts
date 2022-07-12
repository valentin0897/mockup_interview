import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tag, PostTag } from 'src/app/classes/Tag';
import { TagService } from 'src/app/services/rest/tag/tag.service';

@Component({
  selector: 'br-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.sass']
})
export class CreateTagComponent implements OnInit {

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
    this.tagService.saveTag(tag)
  }
}
