import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewComponent } from './components/interview/interview.component';
import { CreateQuestionComponent } from './components/question/create-question/create-question.component';

const routes: Routes = [
  {path: '', component: InterviewComponent},
  {path: 'question/create', component: CreateQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
