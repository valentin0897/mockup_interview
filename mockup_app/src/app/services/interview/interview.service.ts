import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'src/app/classes/Question';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  constructor(private http: HttpClient) { }

  loadQuestions(tagId: number) {
    return this.http.get<Array<Question>>(`${environment.serverUrl}/question/tag/${tagId}`)
  }
}
