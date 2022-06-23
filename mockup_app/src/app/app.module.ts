import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { InterviewComponent } from './components/interview/interview.component';
import { InterviewService } from './services/interview/interview.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InterviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
