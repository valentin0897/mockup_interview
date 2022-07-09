import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag, PostTag } from 'src/app/classes/Tag';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  getTags() {
    this.http.get<Array<Tag>>(`${environment.serverUrl}/tag/`).subscribe((response)=>{
      console.log(response)
    })
  }

  saveTag(body: PostTag){
    this.http.post<Tag>(`${environment.serverUrl}/tag/`, body).subscribe((response)=>{
      console.log(response)
    })
  }
}