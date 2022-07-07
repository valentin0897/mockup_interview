import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { InterviewComponent } from './components/interview/interview.component';
import { InterviewService } from './services/interview/interview.service';
import { CreateQuestionComponent } from './components/question/create-question/create-question.component';
import { QuestionService } from './services/rest/question.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InterviewComponent,
    CreateQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [InterviewService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
