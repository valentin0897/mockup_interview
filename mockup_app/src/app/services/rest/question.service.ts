import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'src/app/classes/Question';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestions() {
    this.http.get<Array<Question>>(`${environment.serverUrl}/question/`).subscribe((response)=>{
      console.log(response)
    })
  }
}
