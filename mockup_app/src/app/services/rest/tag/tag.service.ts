import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag, PostTag } from 'src/app/classes/Tag';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) { }

  loadTags() {
    return this.http.get<Array<Tag>>(`${environment.serverUrl}/tag/`)
  }
  
  saveTag(body: PostTag){
    this.http.post<Tag>(`${environment.serverUrl}/tag/`, body).subscribe((response)=>{
      console.log(response)
    })
  }
}